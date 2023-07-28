
import React, { useState } from 'react';
import axios from 'axios';

const PlayerFilter = ({ onFilter }) => {
  const [selectedGames, setSelectedGames] = useState('');

  const handleFilter = async () => {
    try {
      const response = await axios.get(`/url_players?games=${selectedGames}`);
      onFilter(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter games (e.g., basketball, swimming)"
        value={selectedGames}
        onChange={(e) => setSelectedGames(e.target.value)}
      />
      <button onClick={handleFilter}>Filter Players</button>
    </div>
  );
};

export default PlayerFilter;