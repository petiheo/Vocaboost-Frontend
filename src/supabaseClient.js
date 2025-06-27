import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vfdsqinitlwpotnxqkyn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZHNxaW5pdGx3cG90bnhxa3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5OTU4MTgsImV4cCI6MjA2NjU3MTgxOH0.PWa95QjEhjPcYW63RP6hMvyu7I3PByey_KwoKFvLnhM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)