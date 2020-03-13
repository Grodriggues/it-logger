import React, { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import "./App.css";

//Layout components

function App() {
  useEffect(()=>{
    M.AutoInit();
  })
  return <div className="App"></div>;
}

export default App;
