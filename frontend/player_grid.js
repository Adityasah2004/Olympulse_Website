
import React from 'react';

const PlayerGrid = ({ players }) => {
  return (
    <div className="grid-container">
      {players.map((player) => (
        <div key={player.primary_key} className="player-card">
          <h3>{player.name}</h3>
          <p>Games: {player.games}</p>
          <a href={player.profile_url}>Player Profile</a>
        </div>
      ))}
    </div>
  );
};

export default PlayerGrid;