import React from 'react';
import type { Tournament } from './tournamentType';

function TournamentItem({ tournament }: { tournament: Tournament }): JSX.Element {
  return (
    <div className="tournament">
      <h2>{tournament.name}</h2>
      <p>{tournament.description}</p>
      <p>{tournament.status}</p>
    </div>
  );
}

export default TournamentItem;
