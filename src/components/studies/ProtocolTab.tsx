
import React from "react";
import { ProtocolViewer } from "./ProtocolViewer";

export const ProtocolTab = () => {
  const protocolContent = `# Beyond the Care Dyad: Bridging Dementia Caregivers with eHealth: How Eﬀective
Are They at Bridging and Are (Some of) the Bridges Still Too Far? eHealth Applications to Support Communication, Coordination, Collaboration Among Caregivers of People with Dementia Living at Home
-
A Scoping Review Protocol

## 1. Abstract

Background: Supporting persons with dementia living at home often relies upon complex
care networks extending beyond the primary caregiver-person with dementia (PWD)
dyad[1,2]. Within these networks, eﬀective communication, coordination, and collabora-
tion (CCC) are fundamental for optimizing care quality and sustaining caregiver well-being
[3, 4]. However, maintaining eﬀective CCC frequently encounters significant barriers, in-
cluding geographical distance, time constraints, and fragmented information flow[5]. In
response, numerous electronic health (eHealth) technologies—conceptualized in this re-
search as digital "bridges" due to fragmented terminology—have been developed in re-
cent years to connect network members and facilitate interaction[6,7].
While many such bridges exist, the evidence regarding their types, features, eﬀective-
ness, and factors influencing adoption by diverse caregiver networks appears fragment-
ed. Significant challenges have been reported in the development and adoption of these
technologies [9,10,34]. Bridges must first be built to eﬀectively support the complex and
often dynamic caregiver network, addressing the needs of multiple care stakeholders
across various care scenarios that evolve with the progression of the disease. Yet, due to
the network nature that these bridges are designed to support, successful adoption and
implementation also requires the diverse stakeholders these bridges aim to connect being
able and willing to use collectively as a network [30, 34]. Otherwise, the bridge will remain
"too far"—practically (due to usability, information burden, etc,) or conceptually (due to
technical literacy, privacy concerns, etc), or both [10,11,34]. Recent advancements in Arti-
ficial Intelligence (AI) technologies, particularly Large Language Models (LLMs), holds po-
tential to address some persistent gaps (e.g., interoperability, information input and man-
agement burden, the dilemma between complex system required to be eﬀective and ease
of use or navigation) identified by earlier research [12, 21], but their potential and accep-
tance in this context also remain largely unclear [13].

Objective: This scoping review aims to map the current evidence on eHealth applications
designed as digital "bridges" to support CCC and social or psychosocial support among
diverse caregivers within dementia home care networks. It seeks to identify: the types of
bridges developed; the caregiver roles and network members they connect; the method-
ologies employed in their development and evaluation; the features and techniques uti-
lized to address CCC barriers and adoption challenges within multi-caregiver networks;
and strategies reported to mitigate adoption challenges. Furthermore, it will map reported
eﬀectiveness, stakeholder acceptance, and the factors influencing successful adoption or
implementation, thereby exploring why certain bridges may remain "too far" in practice.
Recognizing the potential of emerging AI technologies, particularly LLMs[12], this review
will also survey the current evidence on AI applications in this context. It will assess if
gaps reported in non-AI research are potentially addressed by AI, explore what is known
about the acceptance of AI, and map any reported attempts to enhance the acceptance
of AI among caregivers. The ultimate goal of this research is to synthesize findings to in-
form future research, technology development, and implementation strategies focused on
creating "eﬀective bridges that last."

Methods: This review will adhere to the Joanna Briggs Institute (JBI) methodology for
scoping reviews [14] and report findings according to the Preferred Reporting Items for
Systematic reviews and Meta-Analyses extension for Scoping Reviews (PRISMA-ScR)
guidelines [15]. Comprehensive searches will be conducted in PubMed, Embase, Scopus,
ACM Digital Library, and IEEE Xplore for literature published from January 2000 onwards.
Supplementary searches will include grey literature and citation tracking. Eligibility criteria
are structured using the Population (diverse caregivers beyond the primary dyad involved
in home-based dementia care), Concept (eHealth "bridges" facilitating network interac-
tion for CCC or support), and Context (home-based dementia care settings) framework.
Two reviewers will independently screen titles/abstracts and full texts. Data from included
studies will be extracted independently by two reviewers using a structured charting form
covering source details, bridge characteristics, development processes, evaluation meth-
ods, eﬀectiveness, stakeholder perspectives, integration capabilities, technological evolu-
tion, and implementation factors. The extracted data will be synthesized narratively, struc-
tured around the review questions and the conceptual framework of digital "bridges."

Keywords: Dementia, Alzheimer Disease, Caregivers, Informal Caregivers, Family Care-
givers, Caregiving Network, eHealth, Mobile Health, Technology, Communication, Coordi-
nation, Collaboration, Social Support, Psychosocial Support, Implementation Science,
Scoping Review, Protocol.

## 2. Introduction

Dementia represents a significant and growing global health challenge [16], characterized
by progressive cognitive decline that profoundly impacts functional capacity and quality
of life [17]. Enabling persons with dementia (PwD) to reside in their own homes for as long
as feasible, often the preferred setting for individuals and families[17], typically involve in-
tricate networks of individuals extending well beyond the primary caregiver-person with
dementia dyad [1,2]. Such networks commonly encompass primary informal caregivers
(e.g., spouses, adult children), secondary informal caregivers (e.g., other relatives, friends,
neighbours), alongside various formal care providers (e.g., home care professionals,
community nurses, general practitioners, medical specialists) [2, 18]. These care networks
exhibit considerable variation in size, composition, and dynamics, often expanding or
shifting as the person with dementia requires increasing levels of assistance with medical
care, mobility, personal care, or supervision, particularly in later stages [1]. Caregivers
within this network also perform numerous functions extending beyond direct assistance;
they act as vital communicators, mediators, and advocates for the person with dementia,
eﬀectively connecting them with the broader social and healthcare environment [18]. As
the cognitive and communicative abilities of the person with dementia decline, the input
and coordinated action of the network become increasingly critical for ensuring that care
decisions align with their known wishes and preferences [2].

The eﬀective functioning of such a care network relies critically on adequate communica-
tion, coordination, and collaboration (CCC) among its members [3,4]. Members require
timely and relevant information—updates on health status, care strategies, schedules—to
contribute eﬀectively. Eﬀective teamwork ensures shared understanding, facilitates ap-
propriate task distribution, enables timely information exchange, and leads to more inte-
grated care [4]. However, achieving seamless CCC within these often dynamic and geo-
graphically dispersed networks faces numerous hurdles [5]. Challenges include coordinat-
ing schedules, sharing sensitive information securely, managing diﬀering knowledge lev-
els or digital literacy, navigating interpersonal dynamics, and overcoming system frag-
mentation [5,19]. An asymmetry often exists, with secondary caregivers potentially lack-
ing direct information access and relying on the primary caregiver, who may be overbur-
dened and struggle to manage communication flows across the network [1,5].

Ehealth, potentials, eﬀects and challenges
Electronic health (eHealth) technologies, broadly defined as the use of information and
communication technologies for health [20] , oﬀer potential avenues for addressing these
CCC barriers. This review conceptualizes such technologies metaphorically as digital
"bridges," designed to connect members of the care network and facilitate smoother in-
teractions. These digital bridges, encompassing a range of tools from web-based plat-
forms and mobile applications [7] to potentially more sophisticated systems leveraging
artificial intelligence (AI)[12], hold the promise of enhancing care network function. They
could potentially enable more eﬃcient and eﬀective information exchange[6], provide
structured support for coordinating complex care tasks and schedules [22], promote
shared understanding and collaborative decision-making processes [4], and foster a
stronger sense of mutual support and shared responsibility among caregivers [23].

The forms these digital bridges take can vary widely. Examples include dedicated care
coordination platforms focusing on task management, shared calendars [22] ; care col-
laboration platforms designed to support joint care planning and communication about
critical decisions [4]; knowledge and education systems aiming to improve dementia liter-
acy and caregiving skills across the network [24]; platforms oﬀering tailored psychosocial
support resources or peer connection opportunities for caregivers [23,25, 30, 33]; sys-
tems incorporating location tracking or wandering alert features for safety management
[34]; or more comprehensive care management systems that integrate multiple functional-
ities into a single interface [7].

Despite this potential and the variety of ehealth currently built, many eHealth interventions
encounter significant obstacles to eﬀectively supporting this care network. The building of
these technologies can be inherently diﬃcult, akin to attempting to build technological
structures on unstable ground – "building bridges on sand." Eﬀective communication and
collaboration within any care network presuppose a foundational level of shared under-
standing among the caregivers. Yet, studies consistently indicate suboptimal dementia
knowledge among the general public and many family caregivers, including prevalent
misconceptions about the condition's nature, progression, management [26]. This knowl-
edge gap can impede informed participation in care decisions and negatively aﬀect inter-
actions within the network, undermining the very foundation upon which collaborative
tools are built. Compounding this issue is the marked heterogeneity in digital literacy
within the caregiver population [10, 27]. Many caregivers, particularly older adults or those
less familiar with technology, may lack the necessary skills, confidence, or access to ef-
fectively engage with online resources or digital tools, even when potentially beneficial.

Furthermore, there is the inherent challenge in designing and developing eHealth tools
that are sophisticated and flexible enough to genuinely support the complex, dynamic,
and often unpredictable nature of real-world dementia care networks, yet keeping them
easy and less burdensome to use for the caregivers [9,11, 21]. Success of adoption and
implementation hinges not only on technical design but also on the willingness and ability
of the entire relevant network—and not just the primary caregiver—to adopt and consis-
tently use the technology collectively [10,11, 30]. Adoption can fail if network members
perceive a tool as too burdensome (requiring app installation, learning new interfaces,
demanding significant time for data entry or retrieval), lack the necessary technological
skills or confidence, question its value or trustworthiness, or hold misconceptions about
its purpose or benefits [9,10, 30]. Privacy concerns regarding sensitive health information
shared across a network are also a significant factor [29]. The interplay between these
two challenges—achieving technical eﬀectiveness and ensuring network-wide adoption—
often forms another hurdle; a tool's complexity might enhance its potential eﬀectiveness
but simultaneously increase adoption barriers, while a simpler tool might be easier to
adopt but lack the necessary functionality to truly bridge the CCC gaps, which can also
lead to "bridge too far" [11, 21].

AI, the solution to finally close some gaps, or just bridges that are conceptually too
far?
Artificial Intelligence (AI), particularly advancements in areas like Large Language Models
(LLMs), has generated considerable discussion regarding its potential to transform vari-
ous aspects of healthcare, including dementia care and caregiving support [12,13]. AI
holds theoretical potential to enhance interoperability between systems, bridging informa-
tion silos, and easing the burden of information input, retrieval, management and presen-
tation for caregivers – potentially addressing gaps that currently seem "too far" to bridge
eﬀectively [12].

However, the application of AI specifically aimed at supporting caregiver networks and
enhancing CCC among multiple caregivers appears to be in its very early stages. Signif-
icant challenges likely remain before AI can be eﬀectively leveraged for this purpose.
These include ensuring usability and accessibility for diverse users within the network,
including older adults and those with varying levels of technological proficiency [13,30].
Furthermore, considerations regarding data privacy, the potential for algorithmic bias im-
pacting care recommendations or task allocation, and the overall trustworthiness of AI
systems may act as significant deterrents for users [13,31]. Caregivers may be hesitant to
accept or rely on "smarter" bridges built with AI, potentially rendering these advanced so-
lutions another form of "bridge too far" in practice, despite their technical might. The
adoption challenges already faced by simpler eHealth tools related to trust and accep-
tance are likely to be amplified with AI [10, 13].

Therefore, a key objective of this scoping review is to map the current state of AI integra-
tion in network support tools. This involves identifying if AI applications are reported to
address previously identified gaps, exploring evidence on user acceptance and perceived
value, understanding if AI represents a conceptual "bridge too far," and mapping any re-
ported methods (e.g., explainable AI techniques) used to enhance trust and acceptance,
along with their described eﬀectiveness.

Rationale and Aims for the Scoping Review
The rationale for conducting this scoping review stems from the fragmentation of evi-
dence regarding eHealth solutions designed to support the broader dementia care net-
work and the persistent challenges ("bridge too far") aﬀecting their development and
adoption [7,8,10]. Utilizing the "bridges" metaphor, this review will systematically identify,
characterize, and map the range of eHealth applications that have been developed, eval-
uated, or proposed to facilitate CCC and provide social or psychosocial support among
the diverse members of dementia care networks (beyond the primary caregiver-PwD
dyad) within the home-care setting, based on evidence from empirical studies. The review
will examine: the characteristics of these bridges (their types, features, and underlying
technologies); the specific network members they are designed to connect; the methods
used for their development and evaluation; the reported evidence regarding their eﬀec-
tiveness and acceptance; the barriers and facilitators influencing their adoption and sus-
tained use; features or techniques employed specifically to address known barriers in
multi-caregiver networks and adoption challenges; their technological evolution over time;
and any available information on their integration and sustainability. By synthesizing
lessons learned from the current body of research, this review aims to provide a clear
overview of the evidence base. This synthesis will serve to inform future research priori-
ties, guide the development of more eﬀective and user-centered technologies, and sup-
port implementation strategies directed towards creating "eﬀective bridges that last."

## 3. Methods

### 3.1. Protocol Design

This scoping review will be conducted in accordance with the JBI methodology [14] for
scoping reviews and will be reported following the Preferred Reporting Items for System-
atic reviews and Meta-Analyses extension for Scoping Reviews (PRISMA-ScR) guidelines
15]. The review will proceed through the following stages: (1) Defining objectives and
questions; (2) Aligning inclusion criteria; (3) Planning evidence search, selection, extrac-
tion, and presentation; (4) Searching; (5) Selecting; (6) Extracting; (7) Analyzing and Sum-
marizing evidence.Stage 1: Defining and aligning the objectives and questions

Stage 1: Defining and aligning the objectives and questions
Research questions were formulated through the Population, Concept, Context (PCC)
framework, guided by the review's objectives and the conceptualization of eHealth inter-
ventions as digital "bridges" connecting members of the care network:

• Population: Caregivers (primary caregivers, secondary/other informal caregivers,
formal home-based care workers, respite providers, volunteers, community sup-
port personnel, and relevant healthcare professionals involved in the care network
for Persons with Dementia (PwD) living primarily at home.
• Concept: eHealth applications that are designed or utilized with features intended
to facilitate interaction among multiple caregivers within the care network, concep-
tualized in this research as digital "bridges". This includes technologies supporting
CCC (communication, coordination, collaboration) or providing social/psychosocial
support across the network.
• Context: Home-based dementia care settings. Including the interface between the
home setting and community-based services (e.g., day centres, respite facilities,
support groups), as well as interactions with primary and specialist healthcare
providers who are part of, or connected to, the home care network.

The primary research questions guiding this review are:

1. What types of "bridges" have been built or attempted so far? - What types of
eHealth applications targeting multi-caregiver interaction in dementia home care
have been developed or attempted (e.g., communication platforms, coordination
tools, shared care planning systems)?
2. (What and) Who are the "bridges" built to bridge? - Who are the intended users
connected by these bridges (e.g., primary caregiver, secondary caregivers, formal
providers, volunteer)? What specific caregiver roles, network or institutions do they
target?
3. What are the features and functionalities of the "bridges"? - What are the specific
features and functionalities incorporated within these applications designed to fa-
cilitate CCC, provide social/psychosocial support, manage information, or coordi-
nate tasks among network members? What features have been developed to en-
able personalized/contextualized privacy/information access control and what fea-
tures have been developed to enhance the explainability and transparency of the
system?
4. How were these "bridges" built? - What design methods, development processes,
and theoretical frameworks (if any) were used to develop these "bridges"? Were
stakeholders involved in the design/development and what stakeholders stake-
holders were involved in the design/development?
5. How were these "bridges" evaluated? - What evaluations were conducted on these
bridges?(e.g. usability , feasibility, acceptability, adoption, eﬀectiveness, implemen-
tation)?
6. How eﬀective are the "bridges" at bridging? - What is the reported evidence re-
garding the eﬀectiveness or impact of these bridges on outcomes related to the
caregiver network (e.g., improved communication, coordination, collaboration, re-
duced conflict), caregiver well-being (e.g., burden, stress, social support), or po-
tentially PwD outcomes (e.g., quality of care, safety)?
7. How are these "bridges" perceived and received? - What are the reported percep-
tions and experiences of stakeholders on using these bridges, including needs,
preferences, perceived usefulness, usability, acceptability, and barriers/facilitators
to use?
8. How integrated are these bridges? - How integrated are these bridges with each
other or with existing health information systems, services, or caregiver workflows,
and what is the perceived impact on information silos or information input burden?
9. How have these bridges evolved over time? - How have the features, functionali-
ties, and underlying technologies used in these bridges changed over the review
period? What newer features have been applied to address know gaps and how
eﬀective they are? Specifically, what is the evidence regarding the integration of
newer technologies like AI (specially LLMs)? What is known about the potential of
AI to address previously identified gaps and how do caregivers perceive and ac-
cept these AI-driven features?
10. Are the "bridges" still standing? - What information is available within the included
studies regarding the sustainability, continued availability, or real-world adoption and use
of these eHealth applications beyond the timeframe of the initial research or pilot project?
What characteristics of the bridges are associated with successful real world adoption
and implementation?

Step 2: Developing and aligning the inclusion criteria with the objective and ques-
tions
Studies will be included if they meet the following criteria:
• Empirical studies (quantitative, qualitative, or mixed-methods) evaluating or detail-
ing the design, development process, feasibility, usability, acceptability, evaluation
methodology, implementation, eﬀectiveness/outcomes, evolution, or sustainability
of eHealth applications supporting interaction among multiple caregivers in de-
mentia home care.
• The eHealth application must include features explicitly designed or utilized to
support interaction (CCC, social/psychosocial support) among multiple caregivers
(i.e., beyond just the PwD or a single caregiver/dyad) within the dementia home
care network or with clear link to the home-based care network.
• Studies published from January 2000 onwards.
• Published in English.

Studies will be excluded based on the following detailed criteria:
• Studies focusing exclusively on institutional settings (e.g., nursing homes, hospi-
tals) without a clear link or interface to the home-based care network via the
eHealth intervention.
• Interventions using only non-interactive technologies (e.g., static informational
websites, electronic leaflets, one-way information push).
• Technologies designed solely for use by the person with dementia, unless they in-
corporate specific functionalities for interaction or information sharing among mul-
tiple caregivers.
• eHealth interventions explicitly targeting only a single caregiver or only the caregiv-
er-person with dementia dyad, without features designed for broader network in-
teraction or communication with other members in the care network.
• Studies focusing solely on the translation or adaptation of an existing tool without
evaluating its network features or related outcomes in the target population.
• Review articles, editorials, commentaries, letters, conference abstracts without suf-
ficient empirical data. Protocols of studies (unless reporting preliminary findings
meeting other criteria).

Step 3. Search Strategy
An initial search string was developed based on PCC framework. Considering the rapid
evolution in this field and the variety of technology that may be designed to support the
dementia care network, a preliminary hand search of app stores (Apple App Store and
Google Play) was also performed to identify features of the first 100 Apps designed to
support multiple caregiver networks of dementia, terms describing these features (e.g.,
information sharing, chat group, task management, shared calendar, care alert, GPS)
were also included in the "Concept" search strings.

This initial search strategy will be pilot-tested in PubMed and IEEE Xplore in consultation
with a librarian to refine keywords and ensure optimal retrieval. Based on the pilot results,
tailored search strings will be developed for each specific database, utilizing appropriate
syntax, Boolean operators (AND, OR), proximity operators (where available), and trunca-
tion/wildcard symbols.

Initial search string:
• Population (Dementia): Dementia, Alzheimer*
• Population (Caregivers/Care Network): Caregiver*, Carer*, Secondary
Caregiver*, Family, care network, caregiver network, care circle, caregiver circle,
Spouse, Respite, Child, Children, friend*, neighbour*, volunteer*, informal care, in-
formal caregiver*, home care worker*, home-care worker*, day care worker*, day
care worker*, nurse*, team, multi-user*, multiple user*
• Concept (eHealth/Technology/Bridges): eHealth, mHealth, digital health, tele-
health, telemedicine, technology, mobile application, app, web, internet, online,
platform, portal, software, artificial intelligence, AI, llm, chatbot, bot, smart, infor-
mation sharing, chat group, chatgroup, task management, shared calendar, care
alert, care alarm, safety alarm, safety alert, personal safety, safety system, gps,
checkin, check in, check-in.
• Context (Context): care communication, care collaboration, care coordination,
care organization, social support, psychosocial support, care support, caregiver
support, peer support, community support, day care, day centre, respite care,
homecare, home care, home-care.

Information Sources:
1. Academic Electronic Databases: Searches will be conducted in the following data-
bases: PubMed, Embase, Scopus, ACM Digital Library, and IEEE Xplore. These data-
bases provide broad coverage across medical, psychological, social science, nursing,
allied health, and computing/engineering literature.
2. Grey Literature Sources: To capture non-peer-reviewed materials and reports not in-
dexed in academic databases, systematic searches will be performed in Google Schol-
ar, first 500 papers will be retrieved for further selection.
3. Supplementary Searching: Reference lists of included studies and relevant reviews
will be manually scanned (citation tracking) in both the chosen academic databases of
this research and google scholar to identify additional potentially eligible studies

Step 5. Study Selection
The study selection process will be managed using systematic review software (Rayyan)
to facilitate eﬃcient screening and documentation, and will be conducted systematically
to minimize bias.
• Process: Following duplicate removal, two reviewers (R1, R2) will independently
screen titles and abstracts against the predefined eligibility criteria. Before com-
mencing independent screening, R1 and R2 will conduct a calibration exercise on
a sample of abstracts (e.g., 50-100) to ensure consistent interpretation and appli-
cation of the criteria. Any disagreements during calibration will be discussed and
criteria clarified as needed.
• Potentially relevant articles identified during title/abstract screening will be re-
trieved for full-text review. R1 and R2 will then independently assess the full texts
against the eligibility criteria.
• Conflict Resolution: Any disagreements between R1 and R2 at either the title/ab-
stract or full-text screening stage will be resolved through discussion and consen-
sus. If consensus cannot be reached, a third reviewer will be consulted to make
the final decision.
• Documentation: Reasons for excluding studies at the full-text stage will be docu-
mented. The entire selection process, including the number of records identified,
screened, assessed for eligibility, and included, will be reported using a PRISMA-
ScR flow diagram.

Study 6. Data Extraction / Charting
A structured data charting form has been developed in Microsoft Excel (Microsoft Corp.)
for this research, guided by the JBI recommendations for scoping reviews and tailored to
address the specific review objectives and questions. The form will be piloted by both re-
viewers on a small subset of included studies (e.g., 3-5 studies) and refined for clarity and
completeness before full data extraction commences.

Two reviewers (R1, R2) will independently extract data from each included source using
the final version of the data charting form. Any discrepancies identified during the extrac-
tion process will be resolved through discussion between the two reviewers. The data
charting form (summarized in Table 1) is designed to capture detailed information across
key domains relevant to the review questions.

Table 1: Data Extraction Items
Category Data Items
Publication/Program 1. Author(s), 2. Year of Publication, 3.
Country/Region, 4. Study Design
Target Population ("Who the bridges
connect")
1. Characteristics of PwD (if specified)
2. The types of Intended users
3. Network structure/size targeted (if spec-
ified)
Context 1. Care setting focus (home, community
interface),
2. The types of care network actions the
bridges are built to support (e.g., daily
care coordination, crisis management,
social support)
"Bridge" Type "Bridge" Features Development Process ("How are
bridges built")
1. Platforms of the "bridge", e.g. iOS app,
android app, web app, WeChat mini app
2. Types of technology used
1. Multi-user support features: Features
addressing Communication, Coordina-
tion, Collaboration, Social Support,
Psychosocial Support, Safety/Monitor-
ing, etc, that are designed for multi-user
usage
2. Single-user support features: Features
designed to support individual care-
givers in the care network, e.g.Knowl-
edge Provision
3. Tutorial/Guidance/Walkthrough Features
(for how to use the "bridges": Features
designed to teach or guide caregivers
on how to use the technology
4. Privacy/Role-based Information Access
Features/Context-based Information
Access Features: Features designed to
give caregivers privacy options and
role-based access
5. "Explainability" and "Transparency"Fea-
tures: Features designed to explain or
reveal the working mechanisms of the
technology
1. Development methodology
2. Types of Stakeholders involved in de-
velopment (e.g., caregivers, PwD, clini-
cians)
3. Number of Stakeholders involved in de-
velopment
Evaluation Approach ("How are bridges
evaluated")
1. Study design used for evaluation (e.g.,
RCT, quasi-experimental, qualitative
study, mixed-methods, usability testing,
feasibility study, pilot study
2. Evaluation timeframe
3. Comparison group (if applicable)
Evaluation Methods & Measures 1. Data collection methods
2. The measurements used
3. Outcome domains assessed (e.g., us-
ability, feasibility, adoption, CCC eﬀective-
ness, caregiver burden, well-being)
Reported Eﬀectiveness/Impact 1. findings regarding the eﬀectiveness or
impact based on the reported outcomes
2. Types of Stakeholders involved in the
evaluation
3. Number of Stakeholders involved in the
evaluation
Stakeholder Perspectives 1. Perceived usefulness,
2. Usability/Ease of use
3. Information input/retrieval burden
4. Privacy related feedback
5. Acceptability
6.Training/Support needs,
7. Barriers and facilitators to adoption/use
8. Other user feedback/experiences
Integration 1. Reported integration (or lack thereof)
with other digital tools, eHealth systems
(e.g., EHRs), or existing health/social
care services/workflows,
2. Impact on information flow/silos, infor-
mation input/retrieval burden.
Evolution & Sustainability ("Are the
Bridges Still standing?")
1. Information on intervention updates, dif-
ferent versions, or evolution over time
2. Current operational status (e.g., active,
discontinued, research-only), Reported
funding model or sustainability plan
3. Reported funding model or sustainabili-
ty plan (if available)
4. Factors associated with successful real-
world adoption/implementation
Key Conclusions/Gaps Identified by
Source
1. Author's main conclusions relevant to
the review questions
2. Gaps identified and future research
suggested by authors

Step 7. Data Analysis, Synthesis and Report results
The data extracted using the charting form will be collated and synthesized to provide a
comprehensive map of the evidence landscape, addressing the review questions.
• Approach: A narrative synthesis will be employed, structured around the ten re-
search questions and the "digital bridges"/"bridge too far" conceptual framework.
• Mapping and Structuring: Basic descriptive statistics for study characteristics
(year, country, design), bridge types, features, users, and outcome measures.
• Quantitative Data Summary: Quantitative data reported on the evaluation of the
"bridges"
• Qualitative Data Synthesis: Thematic analysis of qualitative data (e.g.stakeholder
perceptions, experiences, barriers, facilitators) to identify recurring themes related
to usability, acceptability, benefits, challenges ("bridge too far"), AI experiences,
integration, and sustainability.
• Integration of Findings: Synthesis will integrate quantitative summaries and quali-
tative themes related to each research question.
• Reporting: Results presented via narrative text and tables (summarizing study/
bridge characteristics). A PRISMA-ScR flow diagram will document study selec-
tion. The narrative will address each research question, summarizing key findings,
identifying knowledge gaps, and outlining implications.

## 3. Discussion

This document outlines the protocol for a scoping review designed to systematically map
the evidence concerning eHealth applications conceptualized as digital "bridges" for
supporting CCC and social/psychosocial needs within dementia home care networks. By
adhering to JBI [14] methodology, this review aims to provide a comprehensive overview
of the current state of research and development in this area.

The anticipated contribution of this review is to provide a comprehensive overview of the
types of eHealth "bridges" that have been developed and evaluated, their specific fea-
tures, the network members they target, and the methodologies used to assess them. A
key contribution will be the systematic identification and synthesis of factors reported in
research that contribute to the "bridge too far", the methods used and features developed
to address these gaps and how eﬀective they are. Furthermore, the review will shed light
on the potential role of AI in this domain, mapping its current applications and the associ-
ated challenges regarding acceptance and trust.

A scoping review methodology was chosen as the appropriate approach for this under-
taking. It allows for the clarification of key concepts (like the diﬀerent forms of "bridges"
or "collaboration support"), the identification of knowledge gaps, and an examination of
the state of this field, the evolvement of features and technics that have been developed
or being attempted to address the challenges faced by building eﬀective bridges that last.`;

  // Use the ProtocolViewer to display the content properly and maintain correct formatting
  return (
    <div className="prose max-w-none">
      <ProtocolViewer 
        title="Protocol" 
        documentContent={protocolContent}
        fileName="ScopingReview_Protocol.md"
      />
    </div>
  );
};

