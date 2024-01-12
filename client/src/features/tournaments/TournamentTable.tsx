import React from 'react';
import './tournamentStyle.css';

function TournamentTable(): JSX.Element {
  return (
    <div>
      <section id="bracket">
        <div className="containerTable">
          <div className="split split-one">
            <div className="round round-one current">
              <div className="round-details text-white">Раунд 1</div>
              <ul className="matchup">
                <li className="team team-top">
                  Team 1
                  <span className="score">
                    победил <input type="checkbox" name="" id="" />
                  </span>
                </li>
                <li className="team team-bottom">
                  Team 2
                  <span className="score">
                    победил <input type="checkbox" name="" id="" />
                  </span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Team 3
                  <span className="score">
                    победил <input type="checkbox" name="" id="" />
                  </span>
                </li>
                <li className="team team-bottom">
                  Team 4
                  <span className="score">
                    победил <input type="checkbox" name="" id="" />
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND ONE --> */}
            <div className="round round-two">
              <div className="round-details text-white">Раунд 2</div>
              <div className="round2">
                <ul className="matchup">
                  <li className="team team-top">
                    &nbsp;
                    <span className="score">
                      победил <input type="checkbox" name="" id="" />
                    </span>
                  </li>
                  <li className="team team-bottom">
                    &nbsp;
                    <span className="score">
                      победил <input type="checkbox" name="" id="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END ROUND TWO --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TournamentTable;
