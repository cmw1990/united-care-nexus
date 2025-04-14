
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Save, 
  History, 
  Users, 
  FileText,
  Undo,
  Redo,
  Eye,
  Edit2
} from "lucide-react";

interface Person {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  role: string;
  color: string;
}

interface TextVersion {
  id: string;
  content: string;
  timestamp: string;
  author: Person;
  comment?: string;
}

const demoTeam: Person[] = [
  { id: "1", name: "Alice Chen", initials: "AC", avatar: "", role: "Principal Investigator", color: "#4f46e5" },
  { id: "2", name: "Bob Smith", initials: "BS", avatar: "", role: "Research Assistant", color: "#16a34a" },
  { id: "3", name: "Carol Jones", initials: "CJ", avatar: "", role: "PhD Student", color: "#db2777" },
  { id: "4", name: "David Lee", initials: "DL", avatar: "", role: "Statistician", color: "#ea580c" },
];

const demoVersions: TextVersion[] = [
  {
    id: "v1",
    content: "# Research Protocol Draft\n\n## Background\n\nDementia affects millions of people worldwide, with a significant impact on both patients and their caregivers. This study aims to address the needs of dementia caregivers through innovative eHealth solutions.\n\n## Methods\n\nWe will conduct a mixed-methods study involving interviews with caregivers and healthcare professionals.",
    timestamp: "2023-06-01T10:30:00",
    author: demoTeam[0],
    comment: "Initial draft of the protocol"
  },
  {
    id: "v2",
    content: "# Research Protocol Draft\n\n## Background\n\nDementia affects millions of people worldwide, with a significant impact on both patients and their caregivers. This study aims to address the needs of dementia caregivers through innovative eHealth solutions.\n\n## Methods\n\nWe will conduct a mixed-methods study involving interviews with caregivers and healthcare professionals. The study will include both qualitative interviews and quantitative surveys to gather comprehensive data.",
    timestamp: "2023-06-02T14:45:00",
    author: demoTeam[1],
    comment: "Added details to methods section"
  },
  {
    id: "v3",
    content: "# Research Protocol Draft\n\n## Background\n\nDementia affects millions of people worldwide, with a significant impact on both patients and their caregivers. This study aims to address the needs of dementia caregivers through innovative eHealth solutions.\n\n## Methods\n\nWe will conduct a mixed-methods study involving interviews with caregivers and healthcare professionals. The study will include both qualitative interviews and quantitative surveys to gather comprehensive data.\n\n## Analysis Plan\n\nQualitative data will be analyzed using thematic analysis. Quantitative data will be analyzed using descriptive statistics and regression models where appropriate.",
    timestamp: "2023-06-05T09:15:00",
    author: demoTeam[2],
    comment: "Added analysis plan section"
  }
];

interface TextCoEditorProps {
  title?: string;
  initialVersions?: TextVersion[];
  team?: Person[];
  currentUser?: Person;
}

export function TextCoEditor({
  title = "Protocol Editor",
  initialVersions = demoVersions,
  team = demoTeam,
  currentUser = demoTeam[0]
}: TextCoEditorProps) {
  const [versions, setVersions] = useState<TextVersion[]>(initialVersions);
  const [currentContent, setCurrentContent] = useState(versions[versions.length - 1]?.content || "");
  const [editMode, setEditMode] = useState(false);
  const [saveComment, setSaveComment] = useState("");
  const [activeUsers] = useState<Person[]>([demoTeam[0], demoTeam[2]]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const saveVersion = () => {
    if (currentContent === versions[versions.length - 1]?.content) return;
    
    const newVersion: TextVersion = {
      id: `v${versions.length + 1}`,
      content: currentContent,
      timestamp: new Date().toISOString(),
      author: currentUser,
      comment: saveComment || "Updated document"
    };
    
    setVersions([...versions, newVersion]);
    setSaveComment("");
  };

  const loadVersion = (versionId: string) => {
    const version = versions.find(v => v.id === versionId);
    if (version) {
      setCurrentContent(version.content);
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium flex items-center">
          <FileText className="h-5 w-5 mr-2 text-primary" />
          {title}
        </CardTitle>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2 mr-2">
            {activeUsers.map(user => (
              <div key={user.id} className="relative">
                <Avatar className="h-7 w-7 border-2 border-background">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-background"></div>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? (
              <>
                <Eye className="h-4 w-4 mr-1" /> Preview
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-1" /> Edit
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="editor">
          <TabsList>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="history">
              <History className="h-4 w-4 mr-1" /> 
              Version History
            </TabsTrigger>
            <TabsTrigger value="collaborators">
              <Users className="h-4 w-4 mr-1" /> 
              Collaborators
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="mt-4 space-y-4">
            {editMode ? (
              <>
                <Textarea
                  value={currentContent}
                  onChange={(e) => setCurrentContent(e.target.value)}
                  className="min-h-[400px] font-mono text-sm"
                />
                <div className="flex items-center space-x-2 justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Undo className="h-4 w-4 mr-1" /> Undo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Redo className="h-4 w-4 mr-1" /> Redo
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Textarea
                      placeholder="Describe your changes (optional)"
                      value={saveComment}
                      onChange={(e) => setSaveComment(e.target.value)}
                      className="h-9 py-1 resize-none w-64"
                    />
                    <Button onClick={saveVersion}>
                      <Save className="h-4 w-4 mr-1" /> Save
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="prose max-w-none min-h-[400px] border rounded-md p-4 overflow-auto whitespace-pre-wrap">
                {currentContent || "No content yet."}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <div className="space-y-3">
              <h3 className="font-medium">Document History</h3>
              <div className="border rounded-md divide-y">
                {versions.map((version, index) => (
                  <div key={version.id} className="p-3 hover:bg-accent/40">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={version.author.avatar} />
                          <AvatarFallback style={{ backgroundColor: version.author.color }} className="text-xs">
                            {version.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{version.author.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(version.timestamp)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          Version {index + 1}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => loadVersion(version.id)}
                        >
                          Load
                        </Button>
                      </div>
                    </div>
                    {version.comment && (
                      <p className="text-sm mt-2 text-muted-foreground">
                        {version.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="collaborators" className="mt-4">
            <div className="space-y-3">
              <h3 className="font-medium">Collaborators</h3>
              <div className="border rounded-md divide-y">
                {team.map((person) => (
                  <div key={person.id} className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback style={{ backgroundColor: person.color }}>
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.role}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={activeUsers.some(u => u.id === person.id) ? "default" : "outline"}
                      className={activeUsers.some(u => u.id === person.id) ? "bg-green-500" : ""}
                    >
                      {activeUsers.some(u => u.id === person.id) ? "Online" : "Offline"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
