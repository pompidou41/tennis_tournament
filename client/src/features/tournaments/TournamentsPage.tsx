import React from 'react';
import { Tournament } from './tournamentType';

function TournamentsPage(): JSX.Element {
  <>
    {' '}
    return <h1>TournamentsPage</h1>
    <div>
      {tournaments.map((tournament : Tournament) => (
        <TournamentEl key={tournament.id} />
      ))}
    </div>
  </>;
}

export default TournamentsPage;
