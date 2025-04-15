
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Maximize, Minimize } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProtocolViewerProps {
  title: string;
  documentUrl?: string;
  documentContent?: string;
  onUpload?: (file: File) => Promise<void>;
}

export function ProtocolViewer({ 
  title, 
  documentUrl, 
  documentContent, 
  onUpload 
}: ProtocolViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileContent, setFileContent] = useState<string | null>(documentContent || null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/plain' && 
        !file.name.endsWith('.txt') && 
        !file.name.endsWith('.md') && 
        file.type !== 'application/json') {
      toast({
        title: "Unsupported file type",
        description: "Please upload a text file (.txt, .md, or .json)",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Read file content
      const reader = new FileReader();
      reader.onload = async (event) => {
        const content = event.target?.result as string;
        setFileContent(content);
        
        // Upload file to storage if handler provided
        if (onUpload) {
          await onUpload(file);
        }
        
        toast({
          title: "File uploaded successfully",
          description: "The protocol file has been uploaded and displayed.",
        });
      };
      
      reader.onerror = () => {
        toast({
          title: "Error reading file",
          description: "There was an error reading the file content.",
          variant: "destructive",
        });
      };
      
      reader.readAsText(file);
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

  return (
    <Card className={`border shadow-sm ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`}>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
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
              <a href={documentUrl} download>
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
              accept=".txt,.md,.json,text/plain,application/json"
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
            Upload a text file (.txt, .md, or .json) to display the protocol content.
          </p>
        </div>
        
        <Tabs defaultValue="preview">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Formatted View</TabsTrigger>
            <TabsTrigger value="text">Plain Text</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-2">
            {fileContent ? (
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
            ) : (
              <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
                <p className="text-muted-foreground">Upload a protocol file to see its content</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="text" className="mt-2">
            {fileContent ? (
              <div 
                className="border rounded-md p-4 overflow-auto"
                style={{ height: isFullscreen ? "calc(100vh - 260px)" : "500px" }}
              >
                <pre className="whitespace-pre-wrap text-sm">{fileContent}</pre>
              </div>
            ) : (
              <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
                <p className="text-muted-foreground">Upload a protocol file to see its content</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
