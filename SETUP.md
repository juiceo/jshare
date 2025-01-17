#### Setup steps if you ever need to reset the database

These steps should be automated in the future.

##### 1. Enable realtime for needed tables

Go to Supabase Dashboard -> Database Tables and enable Realtime for the tables that have listeners.

At the time of writing, these are at least: `expenses`, `payments`

##### 2. Create the `uploads` bucket

TODO: Document this
