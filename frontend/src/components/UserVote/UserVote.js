import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const UserVote = props => {
  const [name, setName] = useState('')
  const [vote, setVote] = useState('')
  useEffect(() => {
    getCurrentVote()
  }, [])
  console.log(props);
const getCurrentVote = () => {
  console.log("ghaciendo ina petiio")
  let name = localStorage.getItem('name')
  axios.
  get(`http://localhost:3000/room/${props.match.params.roomId}/current-vote/${name}`)
  .then(response => {
    const member = response.data
    console.log(member)
    setName(member.name)
    setVote(member.vote)
  })
}
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Link
          to={`/story/${props.match.params.roomId}/results`}
          className="btn"
        >
          View team results
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img src="https://avatars.io/gravatar/render" className="profile" alt="usr"/>
          <span>{name}</span>
          </div>
          <div className="card">
          <span className="card-value">{vote}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
