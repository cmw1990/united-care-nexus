
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { row_id } = await req.json()

    // Get the current version
    const { data, error: fetchError } = await supabase
      .from('study_notes')
      .select('version')
      .eq('id', row_id)
      .single()

    if (fetchError) {
      throw fetchError
    }

    const currentVersion = data.version || 1
    const newVersion = currentVersion + 1

    // Update the version
    const { data: updatedData, error: updateError } = await supabase
      .from('study_notes')
      .update({ version: newVersion })
      .eq('id', row_id)
      .select()
      .single()

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        version: newVersion,
        note: updatedData
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        },
        status: 400
      }
    )
  }
})
