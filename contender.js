import React, {useState} from './frontend/'
import PlayerFilter from './frontend/PlayerFilter';
import PlayerGrid from './frontend/PlayerGrid';
import App from './frontend/app';




const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://qcmzcfublrqyfgdiforw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10');