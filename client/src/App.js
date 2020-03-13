import React, { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  const colors = [
    `red`,
    `blue`,
    `yellow`,
    `green`,
    `grey`,
    `#f2f2f2`,
    `orange`
  ];
  const onClick = () => {
    ref.current.style.color = colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="App">
      <h1 ref={ref} onMouseOver={onClick}>
        Its working my good friend Gabriel
      </h1>
    </div>
  );
}

export default App;
