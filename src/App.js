import React from "react";
import Home from "./Home";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./componets/UI/Header";
import "./App.css";
import Sun from "./componets/Sun";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" ? <Home /> : null}
      <Routes>
        <Route path='sun' element={<Sun />} />
        <Route path='/home' element={<Home />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
