import React, { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import "./App.css";

//Layout components
import SearchBar from "./components/layouts/SearchBar";

function App() {
  useEffect(()=>{
    M.AutoInit();
  })
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
