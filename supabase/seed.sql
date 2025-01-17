-- Create the "public" bucket
insert into storage.buckets
  (id, name, public)
values
  ('public', 'public', true);

-- Set up RLS policies for the "public" bucket
create policy "Allow anyone to read"
  on storage.objects for select
  using ( bucket_id = 'public' );


create policy "Allow authenticated users to upload" 
  on storage.objects for insert 
  to authenticated with check (bucket_id = 'public');