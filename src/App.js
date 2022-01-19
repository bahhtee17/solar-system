import React from "react";
import Home from "./Home";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./componets/UI/Header";

import Sun from "./componets/Sun";
import Mercury from "./componets/Mercury";
import Venus from "./componets/Venus";
import Earth from "./componets/Earth";
import Mars from "./componets/Mars";
import Jupiter from "./componets/Jupiter";
import Saturn from "./componets/Saturn";
import Uranus from "./componets/Uranus";
import Neptune from "./componets/Neptune";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" ? <Home /> : null}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='sun' element={<Sun />} />
        <Route path='/mercury' element={<Mercury />} />
        <Route path='/venus' element={<Venus />} />
        <Route path='/earth' element={<Earth />} />
        <Route path='/mars' element={<Mars />} />
        <Route path='/jupiter' element={<Jupiter />} />
        <Route path='/saturn' element={<Saturn />} />
        <Route path='/uranus' element={<Uranus />} />
        <Route path='/neptune' element={<Neptune />} />
      </Routes>
    </>
  );
}

export default App;
