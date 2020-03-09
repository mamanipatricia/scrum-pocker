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
    <div>
      <p>Enter the scrum poker room:</p>
      <input
        type="text"
        onChange={e => updateRoom(e.target.value)}
        value={room}
      />
      <br />
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
      <br />
      <button onClick={join}>Join</button>
    </div>
  );
};
