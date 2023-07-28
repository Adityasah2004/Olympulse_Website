
import React, { useState } from 'react';
import PlayerFilter from './PlayerFilter';
import PlayerGrid from './PlayerGrid';

const App = () => {
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const handleFilter = (players) => {
    setFilteredPlayers(players);
  };

  return (
    <div>
      <h1>Olympic Players</h1>
      <PlayerFilter onFilter={handleFilter} />
      <PlayerGrid players={filteredPlayers} />
    </div>
  );
};

export default App;