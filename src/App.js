import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  return <Game randomNumber={randomNumber} />;
}

export default App;
