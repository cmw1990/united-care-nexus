
import React from "react";
import { ProtocolViewer } from "./ProtocolViewer";

export const CaregiverWeekProtocolTab = () => {
  return (
    <ProtocolViewer
      title="A Week in the Life of Dementia Caregivers Protocol"
      documentContent={`# A Week in the Life of Dementia Caregivers

## 1. Introduction

This protocol outlines the methodology for the "A Week in the Life of Dementia Caregivers" study, which aims to document and understand the daily experiences, challenges, and needs of individuals caring for people with dementia. The study adopts an experience-based co-design approach to gather insights that will inform the development of digital resources supporting caregiver networks.

## 2. Study Objectives

- To explore and identify the daily care-related events, associated needs, and challenges experienced by dementia caregivers, both during the documented periods and more broadly.
- To understand the specific challenges faced by caregivers in collaborating and coordinating care with other individuals involved in the patient's support network.
- To identify current tools and methods used by caregivers for care tasks and collaboration, and to understand their limitations and desired functionalities in new tools.
- To gather insights from primary caregivers on the frequently asked questions from other caregivers, what they want other caregivers to know and what they wish other caregivers knew, to inform the design of an educational "crash course" mini-game.
- To utilize the findings to inform the co-design and development of user-centered digital resources aimed at supporting collaboration among dementia caregiver networks.

## 3. Methodology

This study will utilize a combination of interactive digital surveys and semi-structured interviews.

### 3.1. Participant Recruitment

- Target Number: 20-25 participants.
- Participant Profile:
  - Primary Caregivers: Individuals primarily responsible for the care of a person with dementia.
  - "Other Caregivers": Other individuals who are also involved in the care of the person with dementia (e.g., family members, friends, paid helpers).
- Recruitment Strategy:
  - Primary caregivers will be recruited through relevant organizations, support groups, and online platforms.
  - Primary caregivers will also be invited to send the "Days in the Life of Dementia Caregivers" interactive survey to "other caregivers" in their network and invite them to participate in an interview.

### 3.2. Data Collection Tools & Procedure

The data collection will occur in two main phases, interactive survey and interview.

#### Phase 1: "A Week in the Life of Dementia Caregivers" Interactive Survey (for Primary Caregivers)

- Purpose: 1) To serve as a supplementary data collection tool, gathering rich contextual information about caregiving experiences over a week. 2) To act as a sensitizing tool. The process of logging events during a week is intended to also encourage participants to actively consider their experiences, needs, and challenges in a structured way, preparing them for a broader discussion during the subsequent interview that will cover experiences both within and outside the surveyed week.
- Tool Description: An interactive survey tool accessible via cellphone. 
- Data Collected per Event:
  1) Description of the care-related event.
  2) Needs associated with the event.
  3) Challenges faced (in performing the event itself or in connecting/collaborating with other caregivers regarding the event).
  4) Individuals collaborated with for the event.
  5) Current tools/methods used for the event/collaboration.
  6) Desired tools/features for the event/collaboration.
  7) Limitations of current tools/methods.
- Features:
  - Push Notifications: Hourly prompts from 8 AM to 10 PM. Participants are not required to record an event at every notification; they can record if a care event occurs or choose to log events later.
  - AI-Assisted Input: Voice recording option for data entry.
  - Pre-defined templates for common care events.
  - AI assistance to help structure inputs into a researcher-friendly format, reducing caregiver burden.
- Duration: Primary caregivers will use the tool for one week.

#### "Days in the Life of Dementia Caregivers" Interactive Survey (for "Other Caregivers")

- Purpose: To gather contextual information about the caregiving experiences, needs and challenges of "other caregivers" and act as a sensitizing tool before their interview.
- Tool Description: A condensed version of the "A Week in the Life" survey focusing on recording care related events (event, needs, challenges, collaboration, tools).
- Features: Similar AI-assisted input features as the "A Week in the Life" tool.
- Distribution: Primary caregivers can share a link to this survey with their identified "other caregivers."

#### Phase 2: Semi-Structured Interviews (for all participating Primary and "Other Caregivers")

- Timing: Conducted within one week of the participant completing their respective interactive survey ("A Week in the Life" or "Days in the Life").
- Format: One-to-one interviews, conducted remotely (e.g., video call) or in-person if feasible and preferred. This format is chosen to allow for discussion of personal survey results and potentially sensitive information.
- Review of Specific Survey Data: The interview will touch upon entries from the participant's interactive survey, allowing for deeper exploration of reported events, needs, and challenges.
- Discussion of Broader Experiences: Explore the participant's daily experiences, needs, and challenges occurred outside the survey period. 
- Digital Tool Insights: Further exploration of current tool usage, desired functionalities, and reactions to potential digital resource concepts.
- Specific questions will be asked regarding what primary caregivers wish other caregivers (family, friends, etc.) understood about dementia care. This will inform the content and design of a "crash course" mini-game within the planned intervention platform. 
- Duration: Approximately 60-90 minutes.

### 3.3. Data Handling and Analysis

- Interactive Survey Data: All data will be securely stored and anonymized for analysis.
- Interview Data: Interviews will be audio-recorded (with consent) and transcribed.
- Qualitative Analysis: Thematic analysis will be applied to both survey and interview data to identify recurring patterns, key themes, needs, challenges, and opportunities for digital intervention.
- Co-Design Workshops: Findings will inform subsequent co-design workshops with caregivers to develop digital resources.

## 4. Ethical Considerations

- Informed Consent: All participants will provide informed consent before participation.
- Confidentiality: All data will be anonymized and stored securely.
- Burden Minimization: The study design aims to minimize burden on caregivers through flexible participation options and AI-assisted data entry.
- Emotional Support: Resources for emotional support will be provided to all participants.
- Ethics Approval: This study has received approval from [Ethics Committee Name].

## 5. Timeline

- Recruitment: Month 1-2
- Data Collection: Month 2-4
- Data Analysis: Month 4-5
- Co-Design Workshops: Month 6-8
- Resource Development: Month 8-12

## 6. Expected Outcomes

- Detailed understanding of the daily experiences, challenges, and needs of dementia caregivers.
- Insights into current tools and methods used by caregivers and their limitations.
- Requirements for digital resources to support caregiver networks.
- Prototype digital resources co-designed with caregivers.`}
      fileName="CaregiverWeek_Protocol.md"
    />
  );
};
