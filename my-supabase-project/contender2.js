// Import the createClient function from @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

function loadScript(url, callback) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

// Function to fetch athlete data from the Supabase database
async function fetchAthletes(supabaseUrl, supabaseKey) {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('url_players')
      .select('athlete_full_name, athlete_url, games');

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Function to generate athlete profiles and append them to the contenders-container
async function displayAthletes() {
  try {
    const supabaseUrl = 'https://qcmzcfublrqyfgdiforw.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10';

    const athletesData = await fetchAthletes(supabaseUrl, supabaseKey);
    const contendersContainer = document.querySelector('.contender-profiles');

    athletesData.forEach((athlete) => {
      const athleteProfile = document.createElement('div');
      athleteProfile.classList.add('contender-profile');
  
      const profileImage = document.createElement('img');
      profileImage.classList.add('player-image');
      profileImage.src = athlete.athlete_url;
      athleteProfile.appendChild(profileImage);
  
      const writtenInfo = document.createElement('div');
      writtenInfo.classList.add('written');
  
      const athleteName = document.createElement('h3');
      athleteName.classList.add('name');
      athleteName.textContent = athlete.athlete_full_name;
      writtenInfo.appendChild(athleteName);
  
      const athleteCountry = document.createElement('p');
      athleteCountry.classList.add('player-country');
      athleteCountry.textContent = athlete.games;
      writtenInfo.appendChild(athleteCountry);
  
      athleteProfile.appendChild(writtenInfo);
      contendersContainer.appendChild(athleteProfile)
    });
  } catch (error) {
    console.error('Error fetching and displaying athletes:', error);
  }
}

// Call the function to display athletes after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Dynamically load the Supabase client library
  loadScript(`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.24.0/dist/supabase.js`, () => {
    // Call the function to display athletes after Supabase client is loaded
    displayAthletes();
  });
});