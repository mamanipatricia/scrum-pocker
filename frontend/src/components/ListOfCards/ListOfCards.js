import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../Card/Card";
import axios from 'axios'

export const ListOfCards = props => {
  let history = useHistory();
  const [vote, setVote] = useState(null);
  const [error, setError] = useState("");
  const handlerValue = newVote => {
    setVote(newVote);
  };
  const handlerVote = () => {
    if (vote === null) {
      setError("You have to choose a number");
      return;
    }
    setError(null);
    alert(`Enviando al backend ${vote}`);
    sendVote();
  };

  const sendVote = () => {
    //  to backend //
    axios
      .post(`http://localhost:3000/room/${props.match.params.roomId}/vote`, {
        roomId: `${props.match.params.roomId}`,
        vote: vote,
        name: localStorage.getItem(`name`)
      })
      .then(response => {
        // const voteData = response.data;
        console.log(response.data)
        if (!response.data) return
        history.push(`/story/${props.match.params.roomId}/user`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (vote !== null) {
      setError(null);
    }
  }, [vote]);
  return (
    <div className="cards-container">
      {[0, 1, 2, 3, 5, 8, 13, 24, 40, 100].map(value => {
        return (
          <Card
            key={`card-${value}`}
            classes={`card ${vote === value ? "selected" : ""} `}
            value={value}
            eventclick={() => handlerValue(value)}
          />
        );
      })}
      {error && <span>{error}</span>}
      <button onClick={handlerVote} className="btn" disabled={vote == null}>
        Votar
      </button>
    </div>
  );
};
