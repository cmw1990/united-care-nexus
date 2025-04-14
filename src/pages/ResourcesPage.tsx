
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Link2, Download } from "lucide-react";

const ResourcesPage = () => {
  const publications = [
    {
      title: "Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth",
      authors: "Johnson S, Chen M, Williams E, Davis R",
      journal: "Journal of Medical Internet Research",
      year: "2023",
      link: "#"
    },
    {
      title: "AI-Powered Support for Dementia Caregiver Networks: A Systematic Review",
      authors: "Chen M, Johnson S, Davis R",
      journal: "Digital Health",
      year: "2022",
      link: "#"
    },
    {
      title: "ExperienceD: Using Serious Games to Enhance Dementia Care Knowledge",
      authors: "Williams E, Johnson S",
      journal: "Games for Health Journal",
      year: "2023",
      link: "#"
    }
  ];

  const tools = [
    {
      title: "Caregiver Communication Tool",
      description: "A digital tool to facilitate communication within dementia caregiver networks",
      link: "#",
      icon: Link2
    },
    {
      title: "Task Assignment Template",
      description: "Template for organizing and assigning caregiving tasks within a network",
      link: "#",
      icon: Download
    },
    {
      title: "Caregiver Diary App",
      description: "Mobile application for documenting daily caregiving activities and observations",
      link: "#",
      icon: FileText
    }
  ];

  const multimedia = [
    {
      title: "Introduction to the UniteD Research Program",
      type: "Video",
      duration: "15 minutes",
      link: "#",
      icon: Video
    },
    {
      title: "Dementia Care Network Mapping Workshop",
      type: "Webinar Recording",
      duration: "45 minutes",
      link: "#",
      icon: Video
    },
    {
      title: "Caregiver Network Communication Strategies",
      type: "Podcast",
      duration: "30 minutes",
      link: "#",
      icon: BookOpen
    }
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <section>
          <h1 className="text-3xl font-bold mb-4">Resources</h1>
          <p className="text-muted-foreground max-w-3xl">
            Access publications, tools, and multimedia resources related to our research on dementia caregiver networks and digital support solutions.
          </p>
        </section>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="publications">
              <FileText className="h-4 w-4 mr-2" />
              Publications
            </TabsTrigger>
            <TabsTrigger value="tools">
              <Download className="h-4 w-4 mr-2" />
              Tools & Templates
            </TabsTrigger>
            <TabsTrigger value="multimedia">
              <Video className="h-4 w-4 mr-2" />
              Multimedia
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="publications" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {publications.map((pub) => (
                <Card key={pub.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                    <CardDescription>{pub.authors}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {pub.journal}, {pub.year}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        View Publication
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <Card key={tool.title} className="flex flex-col h-full">
                  <CardHeader>
                    <tool.icon className="h-6 w-6 mb-2 text-primary" />
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={tool.link} target="_blank" rel="noopener noreferrer">
                        Access Tool
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="multimedia" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {multimedia.map((item) => (
                <Card key={item.title} className="flex flex-col h-full">
                  <CardHeader>
                    <item.icon className="h-6 w-6 mb-2 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>
                      {item.type} • {item.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Watch/Listen
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
