#### Setup steps if you ever need to reset the database

These steps should be automated in the future.

##### 1. Enable realtime for needed tables

Go to Supabase Dashboard -> Database Tables and enable Realtime for the tables that have listeners.

At the time of writing, these are at least: `expenses`, `payments`, `messages` and `groups`. You can check `apps/server/src/triggers` to find all of the tables that have listeners and should therefore have Realtime enabled.

##### 2. Enable RLS for all tables

By default all Supabase tables have RLS (Row Level Security) disabled, which means that anyone can read the data if they have the supabase URL. To prevent this, you should enable RLS for all tables.

Go to Supabase Dashboard -> Database Tables and enable RLS (Row Level Security) for all tables. There isn't a need to create any policies, the application does not use RLS to restrict access to the tables.
