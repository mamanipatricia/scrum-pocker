import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import Axios from "axios";

export const VotesResults = props => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    getVotes();
  }, []);

  const getVotes = () => {
    Axios.get(`http://localhost:3000/room/${props.match.params.roomId}/results`)
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
      <h4>Results:</h4>
      <div className="results-container">
        {votes.map(vote => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column" }}
              key={`result-${vote.name}`}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
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
    </Fragment>
  );
};
