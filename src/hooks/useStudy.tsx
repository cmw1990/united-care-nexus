
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { StudyCollaborator, StudyTask, StudyQuestion, StudyDocument, StudyNote } from "@/types/database.types";
import { toast } from "@/hooks/use-toast";
import { checkStorageBucket } from "@/integrations/supabase/client";

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
        .from('study_collaborators')
        .select('*')
        .eq('study_id', studyId);

      if (collaboratorsError) throw collaboratorsError;
      
      // Safely cast data to our defined type
      setCollaborators((collaboratorsData || []) as unknown as StudyCollaborator[]);

      // Fetch tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('study_tasks')
        .select('*')
        .eq('study_id', studyId);

      if (tasksError) throw tasksError;
      setTasks((tasksData || []) as unknown as StudyTask[]);

      // Fetch questions
      const { data: questionsData, error: questionsError } = await supabase
        .from('study_questions')
        .select('*')
        .eq('study_id', studyId);

      if (questionsError) throw questionsError;
      setQuestions((questionsData || []) as unknown as StudyQuestion[]);

      // Fetch documents with better error handling
      const { data: documentsData, error: documentsError } = await supabase
        .from('study_documents')
        .select('*')
        .eq('study_id', studyId);

      if (documentsError) {
        console.error('Error fetching documents:', documentsError);
        throw documentsError;
      }
      
      console.log('Documents fetched:', documentsData);
      setDocuments((documentsData || []) as unknown as StudyDocument[]);

      // Fetch notes
      const { data: notesData, error: notesError } = await supabase
        .from('study_notes')
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

  // Upload document with improved error handling
  const uploadDocument = useCallback(async (file: File, title: string, description?: string) => {
    try {
      // First check if storage bucket exists
      const bucketExists = await checkStorageBucket('studystoragenew');
      
      if (!bucketExists) {
        toast({
          title: "Storage Error",
          description: "The studystoragenew storage bucket doesn't exist. Please contact your administrator.",
          variant: "destructive",
        });
        return null;
      }
      
      // Check if the study_documents table exists
      const { count, error: tableCheckError } = await supabase
        .from('study_documents')
        .select('id', { count: 'exact', head: true });
      
      if (tableCheckError && tableCheckError.code === '42P01') {
        // Table doesn't exist, show a message
        console.error("The study_documents table doesn't exist. Please create it first.");
        toast({
          title: "Database Error",
          description: "The study_documents table doesn't exist. Please contact your administrator.",
          variant: "destructive",
        });
        return null;
      }
      
      // Generate a unique filename to avoid collisions
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      const filePath = `${studyId}/${fileName}`;
      
      console.log('Uploading file to Supabase storage:', filePath);
      
      // Upload file to storage
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('studystoragenew')
        .upload(filePath, file);
        
      if (uploadError) {
        console.error('Storage upload error:', uploadError);
        throw uploadError;
      }
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('studystoragenew')
        .getPublicUrl(filePath);
      
      console.log('File uploaded successfully to:', publicUrl);
      
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
        .from('study_documents')
        .insert(newDocument)
        .select();
        
      if (docError) {
        console.error('Database insert error:', docError);
        throw docError;
      }
      
      console.log('Document record created:', docData);
      
      // Update local state
      if (docData && docData.length > 0) {
        setDocuments(prev => [...prev, docData[0] as unknown as StudyDocument]);
        return docData[0];
      }
      
      return null;
    } catch (error: any) {
      console.error('Error uploading document:', error);
      
      // Provide a more user-friendly error message based on the error type
      let errorMessage = error.message;
      
      if (error.message.includes('row-level security policy')) {
        errorMessage = "Permission denied. You may need to log in or get proper access rights.";
      } else if (error.message.includes('storage/bucket-not-found')) {
        errorMessage = "Storage bucket not found. Please contact your administrator.";
      } else if (error.message.includes('storage/object-too-large')) {
        errorMessage = "File is too large. Please upload a smaller file.";
      }
      
      toast({
        title: "Error uploading document",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    }
  }, [studyId]);

  // Delete document with improved error handling
  const deleteDocument = async (documentId: string, filePath?: string) => {
    try {
      // Delete from database first
      const { error: dbError } = await supabase
        .from('study_documents')
        .delete()
        .eq('id', documentId);
        
      if (dbError) throw dbError;
      
      // If we have the file path, also remove from storage
      if (filePath) {
        console.log('Deleting file from storage:', filePath);
        const { error: storageError } = await supabase.storage
          .from('studystoragenew')
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
      
      let errorMessage = error.message;
      if (error.message.includes('row-level security policy')) {
        errorMessage = "Permission denied. You may need to log in or get proper access rights.";
      }
      
      toast({
        title: "Error deleting document",
        description: errorMessage,
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
