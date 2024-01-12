import React from 'react';
import { useSelector } from 'react-redux';
import type { Tournament } from './tournamentType';
import TournamentItem from './TournamentItem';
import { store, type RootState } from '../../redux/store';

function TournamentsList(): JSX.Element {
  const tournaments = useSelector((store: RootState) => store.tournaments.tournaments);

  return (
    <div>
   
      {tournaments.map((tournament: Tournament) => (
        <TournamentItem tournament={tournament} key={tournament.id} />
      ))}
    </div>
  );
}

export default TournamentsList;
