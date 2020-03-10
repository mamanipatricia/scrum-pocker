import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import axios from "axios";

export const VotesResults = props => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    getVotes();
  });

  const getVotes = () => {
    axios.get(`http://localhost:3000/room/${props.match.params.roomId}/results`)
      .then(response => {
        const result = response.data;
        setVotes(result);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <div className="cards-list">
        <div>
          <h4>Results:</h4>
        </div>
        <div>
          <div className="results-container">
            {votes.map(vote => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "26px"
                  }}
                  key={`result-${vote.name}`}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://avatars.io/gravatar/render"
                      className="profile"
                      alt={vote.name}
                    />
                    <span>{vote.name}</span>
                  </div>
                  <Card value={vote.vote} classes="card" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
