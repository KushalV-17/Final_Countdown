import { useState, useRef } from "react";

export default function Player() {
  const enteredName = useRef();

  const [playername, setplayername] = useState("Unknown Entity");
  // const [submitted, setsubmitted] = useState(false);

  // function handleChange(event) {
  //   setplayername(event.target.value);
  // }

  function handleClick() {
    // setsubmitted(true);
    setplayername(enteredName.current.value);
    enteredName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playername ?? "Unknown entity"}</h2>
      <p>
        <input ref={enteredName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
