
export interface StudyCollaborator {
  id: string;
  study_id: string;
  user_id: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface StudyTask {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  assigned_to: string | null;
  created_by: string | null;
  study_id: string;
  created_at: string;
  updated_at: string;
}

export interface StudyQuestion {
  id: string;
  question: string;
  answer: string | null;
  status: string;
  asked_by: string | null;
  answered_by: string | null;
  created_at: string;
  study_id: string;
}

export interface StudyDocument {
  id: string;
  title: string;
  description: string | null;
  file_url: string | null;
  file_type: string | null;
  created_by: string | null;
  study_id: string;
  created_at: string;
  updated_at: string;
}

export interface StudyNote {
  id: string;
  title: string;
  content: string | null;
  last_edited_by: string | null;
  version: number;
  study_id: string;
  created_at: string;
  updated_at: string;
}
