import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Index() {
  const inputEl = useRef(null);

  const [state, setState] = useState("dat test");

  const onButtonClick = () => {
    setState("test successful");
    inputEl.current.focus();
  };

  useEffect(() => { }, []);

  return (
    <div className="App">
      <h2>Use refs to control focus</h2>
      <input value={state} ref={inputEl} onChange={() => { }} />
      <button onClick={() => onButtonClick()}>Focus the input</button>
    </div>
  );
}


export default Index;