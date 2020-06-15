import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Presentacion from "./Components/Presentacion/Presentacion"

function App(props) {
  return (
    <>
      <Navbar />
      {/* <Card titulo="" texto=""></Card> */}
      <Presentacion nombre="Jean Pool" apellido="Cruz"></Presentacion>
    </>
  );
}

export default App;
