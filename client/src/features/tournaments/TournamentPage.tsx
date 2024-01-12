import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import type { Tournament } from './tournamentType';
import TournamentTable from './TournamentTable';

function TournamentPage(): JSX.Element {
  const tournaments = useSelector((store: RootState) => store.tournaments.tournaments);
  const { gameId } = useParams();

  const tournament: Tournament | undefined = tournaments.find(
    (tour: Tournament) => tour.id === +gameId,
  );

  const error = 'такого тура нет';

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white mx-auto p-6 rounded-xl">
        {tournament ? (
          <>
            <div>
              <div className="px-4 lg:px-0">
                <h1 className="text-base font-semibold leading-7 text-gray-900">
                  {tournament.name}
                </h1>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  {tournament.description}
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Статус:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      {tournament.status}
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Количество участников:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      8
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Формат:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      2x2
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Организатор:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      Юрий
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Приз:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      Значок "Elbrus Bootcamp"
                    </dd>
                  </div>

                  {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              resume_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
                </dl>
              </div>
            </div>
            <div className="px-4 py-6 lg:px-0">
              <TournamentTable />
            </div>
          </>
        ) : (
          <>{error}</>
        )}
      </div>
    </div>
  );
}
//   {/*
//   {tournament ? (
//     <div className="container inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-white-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg odd:bg-gray-100">
//       <h2 className="flex-none">{tournament.id}</h2>
//       <p className="flex-1">{tournament.name}</p>
//       <p className="flex-1">{tournament.status}</p>
//       <p className="flex-1">{tournament.description}</p>
//     </div>
//   ) : (
//     <h3>{error}</h3>
//   )} */}

export default TournamentPage;
