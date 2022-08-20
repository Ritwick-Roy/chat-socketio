import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [room, setRoom] = useState("");
  const [sender, setSender] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/chat", { replace: true, state: { room, sender } });
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="room">Room:</label>
          <input
            placeholder="Room"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Your name"
            onChange={(event) => {
              setSender(event.target.value);
            }}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Home;
