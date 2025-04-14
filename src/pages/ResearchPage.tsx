
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Research</h1>
        
        <div className="max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth</CardTitle>
              <CardDescription>Research Overview</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our research focuses on supporting networks of dementia caregivers through innovative eHealth applications. 
                We explore how technology can facilitate communication, coordination, and collaboration among formal and 
                informal caregivers to improve care outcomes and reduce caregiver burden.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Research Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify gaps in existing eHealth solutions for dementia caregiver networks</li>
                <li>Develop AI-powered tools to facilitate coordination among caregivers</li>
                <li>Evaluate the feasibility and effectiveness of novel digital interventions</li>
                <li>Create resources that address the unique needs of dementia caregivers</li>
                <li>Promote knowledge exchange and support within caregiver networks</li>
              </ul>
            </CardContent>
          </Card>
          
          <p className="text-lg">
            For detailed information about our specific research studies, please visit the <a href="/studies" className="text-primary hover:underline">Studies page</a>.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResearchPage;
