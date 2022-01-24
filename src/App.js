import "./App.css";
import Game from "./components/Game";
import Menu from "./components/Menu";
import React, { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const clickHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return <div className="App">{!toggleMenu ? <Menu onClick={clickHandler}/> : <Game />}</div>;
}

export default App;
