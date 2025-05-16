
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QuestionsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Research Questions</h1>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="study2">
              <AccordionTrigger>Study 2 Questions</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Is a perspective paper on AI supporting dementia caregivers meaningful and publishable?
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>If a perspective paper alone is less "publishable", would adding some additional analysis or expert survey be a suitable consideration?</li>
                      <li>If we choose to conduct an expert survey, what types of experts are suitable?</li>
                    </ul>
                  </li>
                  <li>Where should this paper be on the priority list if chosen?</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="study3">
              <AccordionTrigger>Study 3 Questions</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 font-medium">Understanding the needs of dementia caregivers:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>What are the daily care-related events, associated needs, and challenges experienced by dementia caregivers?</li>
                  <li>What are the specific challenges faced by caregivers in collaborating and coordinating care with other individuals?</li>
                  <li>What current tools and methods are used by caregivers for care tasks and collaboration?</li>
                  <li>What do primary caregivers wish other caregivers knew about dementia care?</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="study4">
              <AccordionTrigger>Study 4 Questions</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 font-medium">Understanding the knowledge, awareness, attitude and misconception of "other caregivers" on dementia:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Is it necessary to conduct a cross-sectional quantitative survey on the knowledge, awareness, attitude and misconceptions of "other caregivers"?</li>
                  <li>How does direct experience of caring for a person with dementia affect knowledge, awareness and attitude of dementia?</li>
                  <li>What are the common misconceptions held by "other caregivers" regarding dementia care?</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </MainLayout>
  );
};

export default QuestionsPage;
