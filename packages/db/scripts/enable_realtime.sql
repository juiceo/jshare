-- Add the necessary tables to the realtime publication if they are not already added
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication p
    JOIN pg_publication_tables pt ON p.pubname = pt.pubname
    WHERE p.pubname = 'supabase_realtime' AND pt.schemaname = 'public' AND pt.tablename = 'messages'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication p
    JOIN pg_publication_tables pt ON p.pubname = pt.pubname
    WHERE p.pubname = 'supabase_realtime' AND pt.schemaname = 'public' AND pt.tablename = 'expenses'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.expenses;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication p
    JOIN pg_publication_tables pt ON p.pubname = pt.pubname
    WHERE p.pubname = 'supabase_realtime' AND pt.schemaname = 'public' AND pt.tablename = 'payments'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.payments;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication p
    JOIN pg_publication_tables pt ON p.pubname = pt.pubname
    WHERE p.pubname = 'supabase_realtime' AND pt.schemaname = 'public' AND pt.tablename = 'groups'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.groups;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication p
    JOIN pg_publication_tables pt ON p.pubname = pt.pubname
    WHERE p.pubname = 'supabase_realtime' AND pt.schemaname = 'public' AND pt.tablename = 'group_participants'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.group_participants;
  END IF;
END $$;


-- Enable realtime publications
SET session_replication_role = 'origin';
