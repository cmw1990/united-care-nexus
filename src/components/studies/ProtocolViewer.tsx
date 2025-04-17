
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Maximize, Minimize, FileText, FileIcon, File } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProtocolViewerProps {
  title: string;
  documentUrl?: string;
  documentContent?: string;
  fileName?: string;
  onUpload?: (file: File) => Promise<void>;
}

export function ProtocolViewer({ 
  title, 
  documentUrl, 
  documentContent,
  fileName,
  onUpload 
}: ProtocolViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [displayFileName, setDisplayFileName] = useState<string | null>(null);

  // Use useEffect to handle prop changes instead of directly in render
  useEffect(() => {
    // Set file content from prop when it changes
    if (documentContent) {
      setFileContent(documentContent);
    }
    
    // Set file name from prop when it changes
    if (fileName) {
      setDisplayFileName(fileName);
    } else if (documentUrl) {
      setDisplayFileName(getFileNameFromUrl(documentUrl));
    }
    
    // Set file type from URL when it changes
    if (documentUrl) {
      setFileType(getFileTypeFromUrl(documentUrl));
    }
  }, [documentContent, documentUrl, fileName]);

  const getFileTypeFromUrl = useCallback((url?: string): string | null => {
    if (!url) return null;
    const lowercaseUrl = url.toLowerCase();
    
    if (lowercaseUrl.endsWith('.pdf')) return 'pdf';
    if (lowercaseUrl.endsWith('.doc') || lowercaseUrl.endsWith('.docx')) return 'word';
    if (lowercaseUrl.endsWith('.txt')) return 'text';
    if (lowercaseUrl.endsWith('.md')) return 'markdown';
    if (lowercaseUrl.endsWith('.json')) return 'json';
    return 'other';
  }, []);

  const getFileNameFromUrl = useCallback((url?: string): string | null => {
    if (!url) return null;
    // Extract file name from URL
    const parts = url.split('/');
    return parts[parts.length - 1];
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getFileType = (file: File): string => {
    if (file.type === 'application/pdf') return 'pdf';
    if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'word';
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) return 'text';
    if (file.name.endsWith('.md')) return 'markdown';
    if (file.type === 'application/json' || file.name.endsWith('.json')) return 'json';
    return 'other';
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Get and validate file type
    const type = getFileType(file);
    setFileType(type);
    setDisplayFileName(file.name);
    setLoading(true);
    
    try {
      // For text-based files, read content immediately for display
      if (type === 'text' || type === 'markdown' || type === 'json') {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const content = event.target?.result as string;
          setFileContent(content);
          
          // Now try to upload the file if handler provided
          if (onUpload) {
            try {
              await onUpload(file);
              toast({
                title: "File uploaded successfully",
                description: `The ${file.name} file has been uploaded and displayed.`,
              });
            } catch (uploadError) {
              console.error("Upload failed:", uploadError);
              toast({
                title: "Upload to storage failed",
                description: "File is displayed locally, but upload to storage failed.",
                variant: "destructive",
              });
            }
          }
        };
        
        reader.onerror = () => {
          toast({
            title: "Error reading file",
            description: "There was an error reading the file content.",
            variant: "destructive",
          });
        };
        
        reader.readAsText(file);
      } else {
        // For binary files (PDF, Word, etc.)
        setFileContent(null);
        
        // Try to upload
        if (onUpload) {
          try {
            await onUpload(file);
            toast({
              title: "File uploaded successfully",
              description: `The ${file.name} file has been uploaded and is available for viewing.`,
            });
          } catch (uploadError) {
            console.error("Upload to storage failed:", uploadError);
            toast({
              title: "Upload failed",
              description: "File upload to storage failed",
              variant: "destructive",
            });
          }
        }
      }
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Error processing file",
        description: "There was an error processing the file.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderFilePreview = () => {
    // If we don't have any document URL or content
    if (!documentUrl && !fileContent) {
      return (
        <div className="flex flex-col items-center justify-center h-60 bg-muted/30 rounded-md">
          <File className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Upload a file to see its content</p>
        </div>
      );
    }

    // For PDF, Word, or other binary documents, use iframe
    if (documentUrl && (fileType === 'pdf' || fileType === 'word' || fileType === 'other')) {
      return (
        <div className="border rounded-md overflow-hidden">
          <iframe
            src={documentUrl}
            className="w-full"
            style={{ height: isFullscreen ? "calc(100vh - 260px)" : "500px" }}
            title={title}
          />
        </div>
      );
    }

    // Text content display
    if (fileContent) {
      return (
        <div 
          className="prose max-w-none border rounded-md p-4 overflow-auto"
          style={{ height: isFullscreen ? "calc(100vh - 260px)" : "500px" }}
        >
          {fileContent.split('\n').map((line, index) => (
            <p key={index} className={line.trim().startsWith('#') ? 'font-bold text-lg' : ''}>
              {line}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
        <p className="text-muted-foreground">No preview available</p>
      </div>
    );
  };

  const getFileIcon = () => {
    if (fileType === 'pdf') return <FileText className="h-4 w-4 mr-2 text-red-500" />;
    if (fileType === 'word') return <FileText className="h-4 w-4 mr-2 text-blue-500" />;
    if (fileType === 'text' || fileType === 'markdown' || fileType === 'json') return <FileText className="h-4 w-4 mr-2 text-gray-500" />;
    return <FileIcon className="h-4 w-4 mr-2" />;
  };

  return (
    <Card className={`border shadow-sm ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`}>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium flex items-center">
          {getFileIcon()}
          {title}
          {displayFileName && <span className="ml-2 text-sm text-muted-foreground">({displayFileName})</span>}
        </CardTitle>
        <div className="flex items-center space-x-1">
          {documentUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {documentUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={documentUrl} download={displayFileName || undefined}>
                <Download className="h-4 w-4" />
              </a>
            </Button>
          )}
          <Button variant="outline" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize className="h-4 w-4" />
            ) : (
              <Maximize className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <label htmlFor="protocol-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Protocol File
          </label>
          <div className="flex items-center">
            <input
              id="protocol-upload"
              type="file"
              accept=".txt,.md,.json,.pdf,.doc,.docx,text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/json"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary/90"
              disabled={loading}
            />
            {loading && <span className="ml-2">Loading...</span>}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Upload a document file (.txt, .md, .json, .pdf, .doc, .docx) to display the protocol content.
          </p>
        </div>
        
        <Tabs defaultValue="preview">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Formatted View</TabsTrigger>
            <TabsTrigger value="text">Plain Text</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-2">
            {renderFilePreview()}
          </TabsContent>
          <TabsContent value="text" className="mt-2">
            {fileContent ? (
              <div 
                className="border rounded-md p-4 overflow-auto"
                style={{ height: isFullscreen ? "calc(100vh - 260px)" : "500px" }}
              >
                <pre className="whitespace-pre-wrap text-sm">{fileContent}</pre>
              </div>
            ) : documentUrl && (fileType === 'pdf' || fileType === 'word' || fileType === 'other') ? (
              <div className="flex flex-col items-center justify-center h-60 bg-muted/30 rounded-md">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">This document type can't be displayed as plain text</p>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-primary underline">
                  Open document in new tab
                </a>
              </div>
            ) : (
              <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
                <p className="text-muted-foreground">Upload a file to see its content</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
