
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  File, 
  Upload, 
  Download, 
  Trash2, 
  Search,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileCode,
  FilePlus,
  Grid2X2,
  List
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ResearchFile {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedBy: string;
  uploadDate: string;
  downloadUrl: string;
}

const demoFiles: ResearchFile[] = [
  {
    id: "file1",
    name: "protocol_draft_v2.docx",
    type: "document",
    size: 2400000,
    uploadedBy: "Alice Chen",
    uploadDate: "2023-06-01",
    downloadUrl: "#"
  },
  {
    id: "file2",
    name: "participant_demographics.xlsx",
    type: "spreadsheet",
    size: 1200000,
    uploadedBy: "Bob Smith",
    uploadDate: "2023-06-05",
    downloadUrl: "#"
  },
  {
    id: "file3",
    name: "consent_form.pdf",
    type: "document",
    size: 500000,
    uploadedBy: "Carol Jones",
    uploadDate: "2023-06-10",
    downloadUrl: "#"
  },
  {
    id: "file4",
    name: "interview_notes.txt",
    type: "text",
    size: 150000,
    uploadedBy: "David Lee",
    uploadDate: "2023-06-15",
    downloadUrl: "#"
  },
  {
    id: "file5",
    name: "research_presentation.pptx",
    type: "presentation",
    size: 8500000,
    uploadedBy: "Alice Chen",
    uploadDate: "2023-06-20",
    downloadUrl: "#"
  },
  {
    id: "file6",
    name: "study_timeline.png",
    type: "image",
    size: 3200000,
    uploadedBy: "Bob Smith",
    uploadDate: "2023-06-25",
    downloadUrl: "#"
  }
];

interface FileManagerProps {
  title?: string;
  initialFiles?: ResearchFile[];
}

export function FileManager({
  title = "Research Files",
  initialFiles = demoFiles
}: FileManagerProps) {
  const [files, setFiles] = useState<ResearchFile[]>(initialFiles);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  
  const filteredFiles = searchTerm
    ? files.filter(file => 
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : files;

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
    else return (bytes / 1073741824).toFixed(1) + ' GB';
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'document':
        return <FileText className="h-6 w-6 text-blue-500" />;
      case 'spreadsheet':
        return <FileSpreadsheet className="h-6 w-6 text-green-500" />;
      case 'presentation':
        return <FileText className="h-6 w-6 text-orange-500" />;
      case 'image':
        return <FileImage className="h-6 w-6 text-purple-500" />;
      case 'code':
        return <FileCode className="h-6 w-6 text-gray-500" />;
      default:
        return <File className="h-6 w-6 text-gray-500" />;
    }
  };

  const toggleFileSelection = (fileId: string) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter(id => id !== fileId));
    } else {
      setSelectedFiles([...selectedFiles, fileId]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (!uploadedFiles) return;

    const newFiles: ResearchFile[] = [...files];
    
    Array.from(uploadedFiles).forEach(file => {
      const fileType = file.name.split('.').pop()?.toLowerCase() || '';
      let type = 'document';
      
      if (['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(fileType)) type = 'image';
      else if (['xls', 'xlsx', 'csv'].includes(fileType)) type = 'spreadsheet';
      else if (['ppt', 'pptx'].includes(fileType)) type = 'presentation';
      else if (['js', 'ts', 'py', 'java', 'html', 'css'].includes(fileType)) type = 'code';
      else if (['txt', 'md'].includes(fileType)) type = 'text';
      
      newFiles.push({
        id: `file${Date.now()}-${newFiles.length}`,
        name: file.name,
        type,
        size: file.size,
        uploadedBy: "Current User",
        uploadDate: new Date().toISOString().split('T')[0],
        downloadUrl: "#"
      });
    });
    
    setFiles(newFiles);
  };

  const deleteSelectedFiles = () => {
    setFiles(files.filter(file => !selectedFiles.includes(file.id)));
    setSelectedFiles([]);
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-accent" : ""}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-accent" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="ml-2">
                  <Upload className="h-4 w-4 mr-1" /> Upload
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Files</DialogTitle>
                  <DialogDescription>
                    Upload research documents, data, or other files to share with the team.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="files">Select files</Label>
                    <Input
                      id="files"
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Upload Files</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            {selectedFiles.length > 0 && (
              <div className="flex items-center space-x-2">
                <Badge variant="outline">
                  {selectedFiles.length} selected
                </Badge>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-destructive hover:text-destructive"
                  onClick={deleteSelectedFiles}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Files</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="data">Data & Spreadsheets</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-2">
              {viewMode === "list" ? (
                <div className="border rounded-md divide-y">
                  {filteredFiles.map(file => (
                    <div 
                      key={file.id} 
                      className={`flex items-center p-3 hover:bg-accent/40 ${
                        selectedFiles.includes(file.id) ? "bg-accent/80" : ""
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      <div className="mr-3 flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{file.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span>Uploaded by {file.uploadedBy} on {file.uploadDate}</span>
                          <span className="mx-1">•</span>
                          <span>{formatFileSize(file.size)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <a href={file.downloadUrl} onClick={e => e.stopPropagation()}>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {filteredFiles.map(file => (
                    <div 
                      key={file.id} 
                      className={`border rounded-md p-4 hover:bg-accent/40 flex flex-col ${
                        selectedFiles.includes(file.id) ? "bg-accent/80" : ""
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      <div className="flex items-center mb-2">
                        {getFileIcon(file.type)}
                        <div className="ml-2 truncate flex-1">
                          <p className="font-medium truncate">{file.name}</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-auto">
                        <p>{formatFileSize(file.size)}</p>
                        <p className="mt-1">Uploaded on {file.uploadDate}</p>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <a href={file.downloadUrl} onClick={e => e.stopPropagation()}>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="documents" className="mt-2">
              <div className={viewMode === "list" ? "border rounded-md divide-y" : "grid grid-cols-3 gap-4"}>
                {filteredFiles
                  .filter(file => ['document', 'text'].includes(file.type))
                  .map(file => (
                    <div 
                      key={file.id} 
                      className={`${viewMode === "list" 
                        ? "flex items-center p-3" 
                        : "border rounded-md p-4 flex flex-col"} 
                        hover:bg-accent/40 ${
                        selectedFiles.includes(file.id) ? "bg-accent/80" : ""
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      {viewMode === "list" ? (
                        <>
                          <div className="mr-3 flex-shrink-0">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{file.name}</p>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>Uploaded on {file.uploadDate}</span>
                              <span className="mx-1">•</span>
                              <span>{formatFileSize(file.size)}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center mb-2">
                            {getFileIcon(file.type)}
                            <div className="ml-2 truncate">
                              <p className="font-medium truncate">{file.name}</p>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-auto">
                            <p>{formatFileSize(file.size)}</p>
                            <p className="mt-1">Uploaded on {file.uploadDate}</p>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="data" className="mt-2">
              <div className={viewMode === "list" ? "border rounded-md divide-y" : "grid grid-cols-3 gap-4"}>
                {filteredFiles
                  .filter(file => ['spreadsheet'].includes(file.type))
                  .map(file => (
                    <div 
                      key={file.id} 
                      className={`${viewMode === "list" 
                        ? "flex items-center p-3" 
                        : "border rounded-md p-4 flex flex-col"} 
                        hover:bg-accent/40 ${
                        selectedFiles.includes(file.id) ? "bg-accent/80" : ""
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      {viewMode === "list" ? (
                        <>
                          <div className="mr-3 flex-shrink-0">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{file.name}</p>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>Uploaded on {file.uploadDate}</span>
                              <span className="mx-1">•</span>
                              <span>{formatFileSize(file.size)}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center mb-2">
                            {getFileIcon(file.type)}
                            <div className="ml-2 truncate">
                              <p className="font-medium truncate">{file.name}</p>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-auto">
                            <p>{formatFileSize(file.size)}</p>
                            <p className="mt-1">Uploaded on {file.uploadDate}</p>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="media" className="mt-2">
              <div className={viewMode === "list" ? "border rounded-md divide-y" : "grid grid-cols-3 gap-4"}>
                {filteredFiles
                  .filter(file => ['image', 'presentation'].includes(file.type))
                  .map(file => (
                    <div 
                      key={file.id} 
                      className={`${viewMode === "list" 
                        ? "flex items-center p-3" 
                        : "border rounded-md p-4 flex flex-col"} 
                        hover:bg-accent/40 ${
                        selectedFiles.includes(file.id) ? "bg-accent/80" : ""
                      }`}
                      onClick={() => toggleFileSelection(file.id)}
                    >
                      {viewMode === "list" ? (
                        <>
                          <div className="mr-3 flex-shrink-0">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{file.name}</p>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>Uploaded on {file.uploadDate}</span>
                              <span className="mx-1">•</span>
                              <span>{formatFileSize(file.size)}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center mb-2">
                            {getFileIcon(file.type)}
                            <div className="ml-2 truncate">
                              <p className="font-medium truncate">{file.name}</p>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-auto">
                            <p>{formatFileSize(file.size)}</p>
                            <p className="mt-1">Uploaded on {file.uploadDate}</p>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}
