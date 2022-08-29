import React from "react";
import Routes from "./config/Routes";
import Header from "./components/Header/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={`${classes.appContainer}`}>
      <Header className={`${classes.appHeader}`} />
      <Routes className={`${classes.appContent}`} />
    </div>
  );
}

export default App;
