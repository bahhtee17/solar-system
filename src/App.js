import React, {useState} from "react";
import Home from "./Home";
import Sun from "./componets/Sun";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./Header";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? <Home /> : null}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
