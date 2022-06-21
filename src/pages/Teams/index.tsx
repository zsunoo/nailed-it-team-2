import React from "react";
import "./teams.css";

function TeamsPage() {
  const teams: Array<Array<string>> = [
    ["Mark DeArmond", "Zigmund Sun Oo", "Mihiran Pandey", "Chris Watkins"],
  ];

  return (
    <div className="teams-page">
      <div>
        <h1 className="teams-title">Meet the Team</h1>
      </div>
      <div className="team-cards">
        {teams.map((team: string[], index: number) => {
          return (
            <div className="team-card">
              <p className="team-name">{"The Hamburglars"}</p>
              <ul>
                {team.map((member: string) => {
                  return <li>{member}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamsPage;
