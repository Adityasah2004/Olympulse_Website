import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and public API key
const supabaseUrl = 'https://qcmzcfublrqyfgdiforw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbXpjZnVibHJxeWZnZGlmb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMjA4NjUsImV4cCI6MjAwNTc5Njg2NX0.wTZbmgx2Z9_UZLnlUYy0kMyn2nnetIe4G06LPl5HX10';

const supabase = createClient(supabaseUrl, supabaseKey);

window.addEventListener('load', async () => {
  try {
    // Fetch the data containing medals from Supabase.
    const { data, error } = await supabase.from('Medals').select('country_name', 'medal_type');

    if (error) {
      throw new Error(error.message);
    }

    // Process the data to calculate the medal counts for each country.
    const leaderboardData = generateLeaderboardData(data);

    // Display the leaderboard data in the container.
    const leaderboardContainer = document.getElementById('leaderboardContainer');
    leaderboardContainer.innerHTML = generateLeaderboardHTML(leaderboardData);
  } catch (err) {
    console.error('Error fetching leaderboard:', err.message);
  }
});

function generateLeaderboardData(data) {
  // Create an object to store the medal counts for each country.
  const medalCountsByCountry = {};

  // Loop through the data and count the medals for each country.
  data.forEach((entry) => {
    const { country_name, medal_type } = entry;
    if (!medalCountsByCountry[country_name]) {
      medalCountsByCountry[country_name] = {
        country_name,
        gold_medals: 0,
        silver_medals: 0,
        bronze_medals: 0,
      };
    }

    if (medal_type === 'GOLD') {
      medalCountsByCountry[country_name].gold_medals++;
    } else if (medal_type === 'SILVER') {
      medalCountsByCountry[country_name].silver_medals++;
    } else if (medal_type === 'BRONZE') {
      medalCountsByCountry[country_name].bronze_medals++;
    }
  });

  // Convert the object values to an array for easier sorting.
  const leaderboardData = Object.values(medalCountsByCountry);

  // Sort the array based on the total number of medals.
  leaderboardData.sort((a, b) => {
    const totalMedalsA = a.gold_medals + a.silver_medals + a.bronze_medals;
    const totalMedalsB = b.gold_medals + b.silver_medals + b.bronze_medals;
    return totalMedalsB - totalMedalsA;
  });

  return leaderboardData;
}

function generateLeaderboardHTML(data) {
  // Create a table to display the leaderboard.
  let html = '<table>';
  html += '<tr><th>Country</th><th>Gold</th><th>Silver</th><th>Bronze</th><th>Total</th></tr>';

  // Loop through the leaderboard data and add rows to the table.
  data.forEach((countryData) => {
    const { country_name, gold_medals, silver_medals, bronze_medals } = countryData;
    const totalMedals = gold_medals + silver_medals + bronze_medals;
    html += `<tr><td>${country_name}</td><td>${gold_medals}</td><td>${silver_medals}</td><td>${bronze_medals}</td><td>${totalMedals}</td></tr>`;
  });

  html += '</table>';
  return html;
}