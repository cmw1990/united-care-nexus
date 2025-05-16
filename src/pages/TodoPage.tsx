
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const TodoPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Next Steps</h1>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Study 2 (Optional): Perspective Paper</h2>
          <p className="mb-4">
            My current plan for this study is to write a perspective paper to discuss the potentials, considerations and challenges of the application of AI to support multi caregiver network of dementia home care, analyzing the potential of AI to address the gaps identified in current researches that appear to be difficult to close with static information input/output technologies, notably the burden of information input/retrieval, the dilemma of a complex system needed to effectively support the multi-caregiver network and ease of use desired by caregivers, and AI's potential to support role based/context based information access, offering context relevant care support and visualized care support.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Questions:</h3>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Is such a perspective paper meaningful and publishable?
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>If a perspective paper alone is less "publishable", would adding some additional analysis or expert survey be a suitable consideration?</li>
                <li>If we choose to conduct an expert survey, what types of experts are suitable?</li>
              </ul>
            </li>
            <li>Where should I put this paper on my priority list if we choose to write it?</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Study 3: Understanding the needs of dementia caregivers</h2>
          <ol className="list-decimal list-inside space-y-4 ml-4">
            <li>
              I think a suitable plan is to use the "a week in the life of dementia caregivers" interactive survey tool as a supplementary survey tool and a sensitizing process. It will not be conducted as an experience sampling method survey, but will rather be used as a supplementary tool before an interview to collect more context enriched qualitative data on the needs and challenges of caregivers, and act as a sensitizing process to prepare caregivers for the interview.
            </li>
            <li>
              A semi-structured interview will follow within a week of finishing the "a week in the life of dementia caregivers" interactive survey. One-to-one interview, rather than workshop or group interview, may be more suitable for the purpose of this study, considering the interview will be structured around the personal survey result of the interactive survey tool and caregivers may be less willing to discuss sensitive personal information around other caregivers, who are strangers.
            </li>
            <li>
              Additional questions regarding what do primary caregivers wish other caregivers to know will also be discussed in the interview, in order to inform the design of a crash course mini game within the intervention platform.
            </li>
            <li>
              Participant number: 20-25, both primary caregivers and "other caregivers" can participate in the research while other caregivers will only join the interview and a brief "Days in the life of dementia caregivers" interactive survey. Primary caregivers can also send the "Days in the life of dementia caregivers" interactive survey to "other caregivers" and invite them to take the interview.
            </li>
          </ol>
          
          <p className="mt-4 text-green-700 font-medium">
            I think this is now a more reasonable and extremely feasible survey process.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Study 4: Understanding the knowledge, awareness, attitude and misconception of "other caregivers" on dementia</h2>
          <p className="mb-4">
            The question is whether it's necessary to conduct a cross-sectional quantitative survey on the knowledge, awareness, attitude and misconceptions of "other caregivers".
          </p>
          <p className="mb-4">
            My plan for this quantitative survey is to answer my hypothesis on how direct experience of caring for person with dementia affect knowledge, awareness and attitude of dementia based on validated measurements and additional tailored questions to gather the likely misconceptions they hold.
          </p>
          <p className="mb-4">
            The aim of this survey is to further inform the design of the crash course mini game within the main intervention, together with the insights we get from study 3 and discussion with care professionals to decide on the game contents.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TodoPage;
