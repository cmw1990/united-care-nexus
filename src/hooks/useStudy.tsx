
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { 
  StudyTask, 
  StudyQuestion, 
  StudyDocument, 
  StudyNote,
  StudyCollaborator
} from "@/types/database.types";

export type { StudyTask, StudyQuestion, StudyDocument, StudyNote, StudyCollaborator };

export const useStudy = (studyId: string) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [questions, setQuestions] = useState<StudyQuestion[]>([]);
  const [documents, setDocuments] = useState<StudyDocument[]>([]);
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all study data
  useEffect(() => {
    if (!user) return;

    const fetchStudyData = async () => {
      setLoading(true);
      try {
        // Check if user is a collaborator
        const { data: collaboratorData, error: collaboratorError } = await supabase
          .from('study_collaborators')
          .select('*')
          .eq('study_id', studyId)
          .eq('user_id', user.id);

        if (collaboratorError) throw collaboratorError;

        // If user is not a collaborator, add them
        if (!collaboratorData || collaboratorData.length === 0) {
          const { error: insertError } = await supabase
            .from('study_collaborators')
            .insert([{ study_id: studyId, user_id: user.id, role: 'admin' }]);

          if (insertError) throw insertError;
        }

        // Fetch tasks
        const { data: tasksData, error: tasksError } = await supabase
          .from('study_tasks')
          .select('*')
          .eq('study_id', studyId);

        if (tasksError) throw tasksError;
        setTasks(tasksData as StudyTask[] || []);

        // Fetch questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('study_questions')
          .select('*')
          .eq('study_id', studyId);

        if (questionsError) throw questionsError;
        setQuestions(questionsData as StudyQuestion[] || []);

        // Fetch documents
        const { data: documentsData, error: documentsError } = await supabase
          .from('study_documents')
          .select('*')
          .eq('study_id', studyId);

        if (documentsError) throw documentsError;
        setDocuments(documentsData as StudyDocument[] || []);

        // Fetch notes
        const { data: notesData, error: notesError } = await supabase
          .from('study_notes')
          .select('*')
          .eq('study_id', studyId);

        if (notesError) throw notesError;
        setNotes(notesData as StudyNote[] || []);

      } catch (err: any) {
        console.error('Error fetching study data:', err);
        setError(err.message);
        toast({
          title: "Error loading study data",
          description: err.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStudyData();
  }, [studyId, user]);

  // Add a new task
  const addTask = async (task: Omit<StudyTask, 'id' | 'created_by' | 'created_at' | 'updated_at' | 'study_id'>) => {
    if (!user) return null;
    
    try {
      const { data, error } = await supabase
        .from('study_tasks')
        .insert([{
          ...task,
          study_id: studyId,
          created_by: user.id
        }])
        .select();

      if (error) throw error;
      
      const newTask = data[0] as StudyTask;
      setTasks(prev => [...prev, newTask]);
      return newTask;
    } catch (err: any) {
      console.error('Error adding task:', err);
      toast({
        title: "Error adding task",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Update a task
  const updateTask = async (id: string, updates: Partial<Omit<StudyTask, 'id' | 'created_at' | 'updated_at' | 'study_id'>>) => {
    try {
      const { data, error } = await supabase
        .from('study_tasks')
        .update(updates)
        .eq('id', id)
        .select();

      if (error) throw error;
      
      const updatedTask = data[0] as StudyTask;
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
      return updatedTask;
    } catch (err: any) {
      console.error('Error updating task:', err);
      toast({
        title: "Error updating task",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Delete a task
  const deleteTask = async (id: string) => {
    try {
      const { error } = await supabase
        .from('study_tasks')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setTasks(prev => prev.filter(task => task.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting task:', err);
      toast({
        title: "Error deleting task",
        description: err.message,
        variant: "destructive",
      });
      return false;
    }
  };

  // Add a question
  const addQuestion = async (question: string) => {
    if (!user) return null;
    
    try {
      const { data, error } = await supabase
        .from('study_questions')
        .insert([{
          study_id: studyId,
          question,
          asked_by: user.id,
          status: 'pending'
        }])
        .select();

      if (error) throw error;
      
      const newQuestion = data[0] as StudyQuestion;
      setQuestions(prev => [...prev, newQuestion]);
      return newQuestion;
    } catch (err: any) {
      console.error('Error adding question:', err);
      toast({
        title: "Error adding question",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Answer a question
  const answerQuestion = async (id: string, answer: string) => {
    if (!user) return null;
    
    try {
      const { data, error } = await supabase
        .from('study_questions')
        .update({
          answer,
          answered_by: user.id,
          status: 'resolved'
        })
        .eq('id', id)
        .select();

      if (error) throw error;
      
      const updatedQuestion = data[0] as StudyQuestion;
      setQuestions(prev => prev.map(q => q.id === id ? updatedQuestion : q));
      return updatedQuestion;
    } catch (err: any) {
      console.error('Error answering question:', err);
      toast({
        title: "Error answering question",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Upload a document
  const uploadDocument = async (file: File, title: string, description?: string) => {
    if (!user) return null;
    
    try {
      // Upload file to storage
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/${studyId}/${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('study_files')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('study_files')
        .getPublicUrl(filePath);

      // Add document record
      const { data, error } = await supabase
        .from('study_documents')
        .insert([{
          study_id: studyId,
          title,
          description,
          file_url: urlData.publicUrl,
          file_type: fileExt,
          created_by: user.id
        }])
        .select();

      if (error) throw error;
      
      const newDocument = data[0] as StudyDocument;
      setDocuments(prev => [...prev, newDocument]);
      return newDocument;
    } catch (err: any) {
      console.error('Error uploading document:', err);
      toast({
        title: "Error uploading document",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  // Delete a document
  const deleteDocument = async (id: string, fileUrl?: string) => {
    try {
      // Delete from storage if URL is provided
      if (fileUrl) {
        const filePath = fileUrl.split('study_files/')[1];
        if (filePath) {
          const { error: storageError } = await supabase.storage
            .from('study_files')
            .remove([filePath]);
          
          if (storageError) throw storageError;
        }
      }

      // Delete document record
      const { error } = await supabase
        .from('study_documents')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setDocuments(prev => prev.filter(doc => doc.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting document:', err);
      toast({
        title: "Error deleting document",
        description: err.message,
        variant: "destructive",
      });
      return false;
    }
  };

  // Create or update a note
  const saveNote = async (title: string, content: string, id?: string) => {
    if (!user) return null;
    
    try {
      if (id) {
        // Update existing note
        const { data, error } = await supabase
          .from('study_notes')
          .update({
            title,
            content,
            last_edited_by: user.id,
            version: supabase.rpc('increment_version', { row_id: id })
          })
          .eq('id', id)
          .select();

        if (error) throw error;
        
        const updatedNote = data[0] as StudyNote;
        setNotes(prev => prev.map(note => note.id === id ? updatedNote : note));
        return updatedNote;
      } else {
        // Create new note
        const { data, error } = await supabase
          .from('study_notes')
          .insert([{
            study_id: studyId,
            title,
            content,
            last_edited_by: user.id,
            version: 1
          }])
          .select();

        if (error) throw error;
        
        const newNote = data[0] as StudyNote;
        setNotes(prev => [...prev, newNote]);
        return newNote;
      }
    } catch (err: any) {
      console.error('Error saving note:', err);
      toast({
        title: "Error saving note",
        description: err.message,
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    tasks,
    questions,
    documents,
    notes,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    addQuestion,
    answerQuestion,
    uploadDocument,
    deleteDocument,
    saveNote
  };
};
