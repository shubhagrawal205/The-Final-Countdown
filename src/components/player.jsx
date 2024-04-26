import { useState, useRef } from "react";

export default function Player() {
  const pName = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState("");

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setPlayerName(pName.current.value);
    pName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Stranger"}</h2>
      <p>
        <input ref={pName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
