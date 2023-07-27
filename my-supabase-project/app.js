const express = require('express');
const session = require('express-session');
const { createClient } = require('@supabase/supabase-js');

const app = express();

const supabaseUrl = 'https://qcmzcfublrqyfgdiforw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10';

const supabase = createClient(supabaseUrl, supabaseKey);

// Set up express-session middleware with in-memory storage
app.use(
  session({
    secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDIyMDg2NSwiZXhwIjoyMDA1Nzk2ODY1fQ.1JoJsowFyWbSTXPt7IopL045FI3HgMAnr3iOwVYzQQs', // Change this to a strong and unique secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Fetch data from Supabase using session persistence
app.get('/fetchData', async (req, res) => {
  if (!req.session.data) {
    // If session data doesn't exist, fetch data from Supabase
    const { data, error } = await supabase.from('Medals').select('*');

    if (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }

    req.session.data = data; // Save data in the session
  }

  res.json({ data: req.session.data }); // Respond with the data from the session
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
