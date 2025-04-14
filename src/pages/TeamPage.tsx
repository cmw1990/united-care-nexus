
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator",
      image: "",
      bio: "Dr. Johnson leads the UniteD research program, focusing on digital solutions for dementia caregivers. She has over 15 years of experience in healthcare technology research."
    },
    {
      name: "Dr. Michael Chen",
      role: "Research Co-Investigator",
      image: "",
      bio: "Dr. Chen specializes in AI applications in healthcare, with particular expertise in developing intelligent systems to support caregiver communication."
    },
    {
      name: "Emma Williams",
      role: "Research Associate",
      image: "",
      bio: "Emma coordinates the co-design sessions with caregiver networks and oversees the implementation of the support hub prototype."
    },
    {
      name: "Dr. Robert Davis",
      role: "Clinical Advisor",
      image: "",
      bio: "Dr. Davis provides clinical expertise on dementia care practices and ensures that all digital solutions are aligned with evidence-based care approaches."
    }
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Research Team</h1>
          <p className="text-muted-foreground max-w-3xl">
            Our interdisciplinary team brings together expertise in healthcare technology, dementia care, 
            artificial intelligence, and user experience design to develop innovative solutions for dementia caregiver networks.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Research Partners</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                The UniteD research program is conducted in collaboration with several key partners:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>University Medical Center - Department of Geriatrics</li>
                <li>National Dementia Care Association</li>
                <li>Digital Health Innovation Lab</li>
                <li>Community Caregiver Support Network</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
};

export default TeamPage;
