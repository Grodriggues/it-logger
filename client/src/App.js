import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
//Logs
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";

//Layout components
import SearchBar from "./components/layouts/SearchBar";
import AddBtn from "./components/layouts/AddBtn";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
