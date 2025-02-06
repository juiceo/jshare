-- Disable realtime publications (when e.g. running migrations)
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_publication_tables WHERE pubname = 'supabase_realtime') LOOP
        EXECUTE format('ALTER PUBLICATION supabase_realtime DROP TABLE %I.%I', 'public', r.tablename);
    END LOOP;
END $$;

