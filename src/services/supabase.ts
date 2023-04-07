import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase =
	process.env.NODE_ENV === 'development'
		? createClient(
				'https://tdnswskkzoquqhtoordo.supabase.co',
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbnN3c2trem9xdXFodG9vcmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MTg3MjYsImV4cCI6MTk5MjQ5NDcyNn0.xdywLez3SE0byGkk1kECn6RLl9_nb2Hhcib55cIqEa4',
		  )
		: createClient(
				'https://yccsvpujenbaaxdawyeg.supabase.co',
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljY3N2cHVqZW5iYWF4ZGF3eWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2NDA5ODAsImV4cCI6MTk5MDIxNjk4MH0.liFF8GwlSxUEl69ETn0BkXcfLMJsrtM_l9wJTYcL3y0',
		  );
