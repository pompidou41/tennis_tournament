import React from 'react';
import { useSelector } from 'react-redux';
import type { Tournament } from './tournamentType';
import TournamentItem from './TournamentItem';
import type { RootState } from '../../redux/store';

function TournamentsList(): JSX.Element {
  const tournaments = useSelector((store: RootState) => store.tournaments.tournaments);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl text-white py-8">Список турниров</h1>
      <ul className="flex flex-col">
        {tournaments.map((tournament: Tournament) => (
          <TournamentItem tournament={tournament} key={tournament.id} />
        ))}
      </ul>
    </div>
  );
}

export default TournamentsList;
