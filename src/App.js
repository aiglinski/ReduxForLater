import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./layout/SearchBar";
import AddBtn from "./layout/AddBtn";
import AddLogModal from "./layout/logs/AddLogModal";
import EditLogModal from "./layout/logs/EditLogModal";
import AddTechModal from "./layout/techs/AddTechModal";
import TechListModal from "./layout/techs/TechListModal";
import store from "./store";
import { Provider } from "react-redux";
import Logs from "./layout/logs/Logs";
import "./App.css";

const App = () => {
  // Auto-init when using materialize Javascript
  useEffect(() => M.AutoInit());
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <EditLogModal />
          <AddLogModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
