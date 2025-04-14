
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Maximize, Minimize } from "lucide-react";

interface DocumentViewerProps {
  title: string;
  documentUrl?: string;
  documentContent?: string;
}

export function DocumentViewer({ title, documentUrl, documentContent }: DocumentViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
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
        <Tabs defaultValue="preview">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="text">Plain Text</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-2">
            {documentUrl ? (
              <div className="border rounded-md overflow-hidden">
                <iframe
                  src={documentUrl}
                  className="w-full"
                  style={{ height: isFullscreen ? "calc(100vh - 180px)" : "500px" }}
                  title={title}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
                <p className="text-muted-foreground">No document available for preview</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="text" className="mt-2">
            {documentContent ? (
              <div 
                className="prose max-w-none border rounded-md p-4 overflow-auto"
                style={{ height: isFullscreen ? "calc(100vh - 180px)" : "500px" }}
              >
                <pre className="whitespace-pre-wrap text-sm">{documentContent}</pre>
              </div>
            ) : (
              <div className="flex items-center justify-center h-60 bg-muted/30 rounded-md">
                <p className="text-muted-foreground">No text content available</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
