import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Login = () => {
  let history = useHistory();
  //  states
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  //
  const updateRoom = newRoom => {
    setRoom(newRoom);
  };

  const join = () => {
    if (!(room && name)) {
      alert("debe ingresar los datos!");
      return;
    }

    // history.push("/story/2")
    axios
      .post("http://localhost:3000/room/join", { room, name })
      .then(response => {
        const story = response.data;
        console.log(story);
        localStorage.setItem(`name`, name);
        history.push(`/story/${story.roomId}`);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };
  // STORY ES EL ROOM , EL QUE CONTIENE TODO
  return (
    <div className="login-container w-1/2 mx-auto">
      <p>Enter the Scrum Pocker room:</p>
      <div className="label-input">
        <label className="label">Room id (*)</label>
        <input
          className="input"
          type="text"
          onChange={e => updateRoom(e.target.value)}
          value={room}
        />
      </div>
      <div className="label-input">
        <label className="label">Name (*)</label>
        <input
          className="input"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="button-box">
        <button className="btn" onClick={join}>Join</button>
      </div>
    </div>
  );
};
