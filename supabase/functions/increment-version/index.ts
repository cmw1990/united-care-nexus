
// @ts-ignore - Deno imports
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore - Deno imports
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RequestBody {
  noteId: string;
  userId: string;
  content: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Get Supabase URL and key from environment variables
  // @ts-ignore - Deno global
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
  // @ts-ignore - Deno global
  const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Parse request body
    const { noteId, userId, content } = await req.json() as RequestBody;

    if (!noteId || !userId) {
      return new Response(
        JSON.stringify({ error: 'Note ID and User ID are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get the current version of the note
    const { data: noteData, error: fetchError } = await supabase
      .from('study_notes')
      .select('version')
      .eq('id', noteId)
      .single();

    if (fetchError) {
      return new Response(
        JSON.stringify({ error: fetchError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const currentVersion = noteData?.version || 1;
    const newVersion = currentVersion + 1;

    // Update the note with the new version, content and user who edited it
    const { data, error: updateError } = await supabase
      .from('study_notes')
      .update({
        content,
        version: newVersion,
        last_edited_by: userId,
        updated_at: new Date().toISOString()
      })
      .eq('id', noteId)
      .select()
      .single();

    if (updateError) {
      return new Response(
        JSON.stringify({ error: updateError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
