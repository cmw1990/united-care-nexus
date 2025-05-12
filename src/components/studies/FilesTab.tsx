
import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileIcon, Download, Trash2, Eye } from "lucide-react";
import { useStudy } from "@/hooks/useStudy";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const FilesTab = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { documents, uploadDocument, deleteDocument, fetchStudyData } = useStudy("scoping-review");

  // Immediately fetch study data on component mount
  useEffect(() => {
    fetchStudyData();
  }, [fetchStudyData]);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      console.log('Uploading file:', file.name);
      // Upload the file to Supabase storage and create a database record
      const result = await uploadDocument(file, file.name, `File uploaded on ${new Date().toLocaleString()}`);
      
      if (result) {
        toast({
          title: "File uploaded successfully",
          description: "Your file has been uploaded and saved to the database.",
        });
        // Explicitly refetch the document list to ensure UI updates
        await fetchStudyData();
      } else {
        throw new Error("File upload failed - could not save to database");
      }
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading your file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Clear the file input
      if (event.target) {
        event.target.value = '';
      }
    }
  }, [uploadDocument, fetchStudyData]);

  const handleDeleteFile = async (document: any) => {
    try {
      // Extract filename from the URL
      const url = new URL(document.file_url);
      const filePath = url.pathname.split('/').slice(2).join('/');
      
      console.log('Deleting file:', filePath);
      const result = await deleteDocument(document.id, filePath);
      
      if (result) {
        toast({
          title: "File deleted",
          description: "The file has been deleted successfully.",
        });
        // Explicitly refetch the document list to ensure UI updates
        await fetchStudyData();
      } else {
        throw new Error("File deletion failed");
      }
    } catch (error: any) {
      console.error("Error deleting file:", error);
      toast({
        title: "Deletion failed",
        description: error.message || "There was an error deleting the file",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="border rounded-md p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Files</h2>
          <p className="text-muted-foreground">Upload, download, and manage study files</p>
        </div>
        <div className="flex items-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? "Uploading..." : "Upload File"}
            </Button>
          </label>
        </div>
      </div>

      {documents.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 border rounded-md border-dashed">
          <FileIcon className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">No files yet. Upload your first file to get started.</p>
        </div>
      ) : (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Study Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-2 border rounded hover:bg-accent/20">
                  <div className="flex items-center">
                    <FileIcon className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="font-medium">{doc.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Uploaded {formatDate(doc.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={doc.file_url} download={doc.title}>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteFile(doc)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
