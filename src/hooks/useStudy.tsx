
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { StudyCollaborator, StudyTask, StudyQuestion, StudyDocument, StudyNote } from "@/types/database.types";
import { toast } from "@/hooks/use-toast";

// Define types for the database tables
type StudyCollaboratorRow = {
  id: string;
  study_id: string;
  user_id: string;
  role: string;
  created_at: string;
  updated_at: string;
}

type StudyTaskRow = {
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

type StudyQuestionRow = {
  id: string;
  question: string;
  answer: string | null;
  status: string;
  asked_by: string | null;
  answered_by: string | null;
  created_at: string;
  study_id: string;
}

type StudyDocumentRow = {
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

type StudyNoteRow = {
  id: string;
  title: string;
  content: string | null;
  last_edited_by: string | null;
  version: number;
  study_id: string;
  created_at: string;
  updated_at: string;
}

export const useStudy = (studyId: string) => {
  const [collaborators, setCollaborators] = useState<StudyCollaborator[]>([]);
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [questions, setQuestions] = useState<StudyQuestion[]>([]);
  const [documents, setDocuments] = useState<StudyDocument[]>([]);
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all study data
  const fetchStudyData = useCallback(async () => {
    setLoading(true);
    try {
      // Using explicit type casting with 'as any' to bypass TypeScript errors
      // Fetch collaborators
      const { data: collaboratorsData, error: collaboratorsError } = await supabase
        .from('study_collaborators' as any)
        .select('*')
        .eq('study_id', studyId);

      if (collaboratorsError) throw collaboratorsError;
      
      // Safely cast data to our defined type
      setCollaborators((collaboratorsData || []) as unknown as StudyCollaborator[]);

      // Fetch tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('study_tasks' as any)
        .select('*')
        .eq('study_id', studyId);

      if (tasksError) throw tasksError;
      setTasks((tasksData || []) as unknown as StudyTask[]);

      // Fetch questions
      const { data: questionsData, error: questionsError } = await supabase
        .from('study_questions' as any)
        .select('*')
        .eq('study_id', studyId);

      if (questionsError) throw questionsError;
      setQuestions((questionsData || []) as unknown as StudyQuestion[]);

      // Fetch documents
      const { data: documentsData, error: documentsError } = await supabase
        .from('study_documents' as any)
        .select('*')
        .eq('study_id', studyId);

      if (documentsError) throw documentsError;
      setDocuments((documentsData || []) as unknown as StudyDocument[]);

      // Fetch notes
      const { data: notesData, error: notesError } = await supabase
        .from('study_notes' as any)
        .select('*')
        .eq('study_id', studyId);

      if (notesError) throw notesError;
      setNotes((notesData || []) as unknown as StudyNote[]);

    } catch (error: any) {
      console.error('Error fetching study data:', error);
      toast({
        title: "Error fetching study data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [studyId]);

  useEffect(() => {
    fetchStudyData();
  }, [fetchStudyData]);

  // Add a task
  const addTask = async (taskData: Omit<StudyTask, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const newTask = {
        ...taskData,
        study_id: studyId,
      };
      
      const { data, error } = await supabase
        .from('study_tasks' as any)
        .insert(newTask)
        .select()
        .single();
        
      if (error) throw error;
      
      setTasks(prev => [...prev, data as unknown as StudyTask]);
      return data;
    } catch (error: any) {
      console.error('Error adding task:', error);
      toast({
        title: "Error adding task",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Update a task
  const updateTask = async (taskId: string, updates: Partial<StudyTask>) => {
    try {
      const { data, error } = await supabase
        .from('study_tasks' as any)
        .update(updates)
        .eq('id', taskId)
        .select()
        .single();
        
      if (error) throw error;
      
      setTasks(prev => prev.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      ));
      
      return data;
    } catch (error: any) {
      console.error('Error updating task:', error);
      toast({
        title: "Error updating task",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Delete a task
  const deleteTask = async (taskId: string) => {
    try {
      const { error } = await supabase
        .from('study_tasks' as any)
        .delete()
        .eq('id', taskId);
        
      if (error) throw error;
      
      setTasks(prev => prev.filter(task => task.id !== taskId));
      return true;
    } catch (error: any) {
      console.error('Error deleting task:', error);
      toast({
        title: "Error deleting task",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  // Add a question
  const addQuestion = async (questionData: Omit<StudyQuestion, 'id' | 'created_at' | 'answer' | 'status' | 'answered_by'>) => {
    try {
      const newQuestion = {
        ...questionData,
        answer: null,
        status: 'pending',
        answered_by: null,
        study_id: studyId,
      };
      
      const { data, error } = await supabase
        .from('study_questions' as any)
        .insert(newQuestion)
        .select()
        .single();
        
      if (error) throw error;
      
      setQuestions(prev => [...prev, data as unknown as StudyQuestion]);
      return data;
    } catch (error: any) {
      console.error('Error adding question:', error);
      toast({
        title: "Error adding question",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Answer a question
  const answerQuestion = async (questionId: string, answer: string, answeredBy: string) => {
    try {
      const updates = {
        answer,
        answered_by: answeredBy,
        status: 'resolved',
      };
      
      const { data, error } = await supabase
        .from('study_questions' as any)
        .update(updates)
        .eq('id', questionId)
        .select()
        .single();
        
      if (error) throw error;
      
      setQuestions(prev => prev.map(question => 
        question.id === questionId ? { ...question, ...updates } : question
      ));
      
      return data;
    } catch (error: any) {
      console.error('Error answering question:', error);
      toast({
        title: "Error answering question",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Upload document
  const uploadDocument = async (file: File, title: string, description?: string) => {
    try {
      // Upload file to storage
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `${studyId}/${fileName}`;
      
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('study-documents')
        .upload(filePath, file);
        
      if (uploadError) throw uploadError;
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('study-documents')
        .getPublicUrl(filePath);
      
      // Create document record
      const newDocument = {
        title,
        description: description || null,
        file_url: publicUrl,
        file_type: file.type,
        created_by: null, // Should be set to user ID in a real app
        study_id: studyId,
      };
      
      const { data: docData, error: docError } = await supabase
        .from('study_documents' as any)
        .insert(newDocument)
        .select()
        .single();
        
      if (docError) throw docError;
      
      setDocuments(prev => [...prev, docData as unknown as StudyDocument]);
      return docData;
    } catch (error: any) {
      console.error('Error uploading document:', error);
      toast({
        title: "Error uploading document",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Delete document
  const deleteDocument = async (documentId: string, filePath?: string) => {
    try {
      // Delete from database first
      const { error: dbError } = await supabase
        .from('study_documents' as any)
        .delete()
        .eq('id', documentId);
        
      if (dbError) throw dbError;
      
      // If we have the file path, also remove from storage
      if (filePath) {
        const { error: storageError } = await supabase.storage
          .from('study-documents')
          .remove([filePath]);
          
        if (storageError) {
          console.error('Error removing file from storage:', storageError);
          // Continue anyway since DB record is gone
        }
      }
      
      setDocuments(prev => prev.filter(doc => doc.id !== documentId));
      return true;
    } catch (error: any) {
      console.error('Error deleting document:', error);
      toast({
        title: "Error deleting document",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  // Save a note
  const saveNote = async (noteData: Partial<StudyNote> & { id?: string }) => {
    try {
      // New note
      if (!noteData.id) {
        const newNote = {
          ...noteData,
          version: 1,
          study_id: studyId,
        };
        
        const { data, error } = await supabase
          .from('study_notes' as any)
          .insert(newNote)
          .select()
          .single();
          
        if (error) throw error;
        
        setNotes(prev => [...prev, data as unknown as StudyNote]);
        return data;
      } 
      // Update existing note
      else {
        try {
          // Call the increment-version edge function
          const { data, error } = await supabase.functions.invoke('increment-version', {
            body: { 
              noteId: noteData.id,
              updates: noteData
            }
          });
          
          if (error) throw error;
          
          // Update notes state with the returned updated note
          setNotes(prev => prev.map(note => 
            note.id === noteData.id ? { ...note, ...data } : note
          ));
          
          return data;
        } catch (error: any) {
          console.error('Error updating note:', error);
          throw error;
        }
      }
    } catch (error: any) {
      console.error('Error saving note:', error);
      toast({
        title: "Error saving note",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    collaborators,
    tasks,
    questions,
    documents,
    notes,
    loading,
    fetchStudyData,
    addTask,
    updateTask,
    deleteTask,
    addQuestion,
    answerQuestion,
    uploadDocument,
    deleteDocument,
    saveNote,
  };
};
