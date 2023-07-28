const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

const supabaseUrl = 'https://qcmzcfublrqyfgdiforw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

app.get('/url_players', async (req, res) => {
  try {
    const { games } = req.query;
    let { data: players, error } = await supabase
      .from('url_players')
      .select('*')
      .eq('games', games);

    if (error) {
      throw new Error(error.message);
    }

    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})