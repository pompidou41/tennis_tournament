import React from 'react';
import { Link } from 'react-router-dom';
import type { Tournament } from './tournamentType';

function TournamentItem({ tournament }: { tournament: Tournament }): JSX.Element {
  return (
    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg odd:bg-gray-100">
      <Link
        className="inline-flex justify-between gap-x-2"
        to={`/tournaments/${tournament.id}/tour`}
        style={{ width: '100%' }}
      >
        <h2 className="flex-none">{tournament.id}</h2>
        <p className="flex-1">{tournament.name}</p>
        <p className="flex-1">{tournament.status}</p>
        <p className="flex-1">{tournament.description}</p>
      </Link>
    </li>
  );
}

export default TournamentItem;
