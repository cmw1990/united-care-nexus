
-- Create function to increment version for study notes
CREATE OR REPLACE FUNCTION increment_version(row_id UUID)
RETURNS INT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_version INT;
  new_version INT;
BEGIN
  -- Get the current version
  SELECT version INTO current_version FROM public.study_notes WHERE id = row_id;
  
  -- Calculate the new version
  new_version := COALESCE(current_version, 0) + 1;
  
  -- Return the new version
  RETURN new_version;
END;
$$;
