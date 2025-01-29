-- Ensure the public_uploads bucket exists and has the appopriate policies
INSERT INTO storage.buckets (id, name, public)
VALUES ('public_uploads', 'public_uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Create "Allow anyone to read" policy if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow anyone to read public_uploads'
    AND tablename = 'objects'
  ) THEN
    CREATE POLICY "Allow anyone to read public_uploads"
      ON storage.objects FOR SELECT
      USING (bucket_id = 'public_uploads');
  END IF;
END $$;

-- Create "Allow authenticated users to upload" policy if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE policyname = 'Allow authenticated users to upload to public_uploads'
    AND tablename = 'objects'
  ) THEN
    CREATE POLICY "Allow authenticated users to upload to public_uploads"
      ON storage.objects FOR INSERT 
      TO authenticated 
      WITH CHECK (bucket_id = 'public_uploads');
  END IF;
END $$;
