const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qcmzcfublrqyfgdiforw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10';

const supabase = createClient(supabaseUrl, supabaseKey, { persistSession: false });

async function fetchData() {
  const { data, error } = await supabase.from('Medals').select('*');

  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }

  console.log('Fetched data:', data);
}

fetchData();