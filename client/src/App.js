import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
//Logs
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
//Techs
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

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
          <AddTechModal />
          <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
