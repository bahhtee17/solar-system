import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Sun from "./componets/Sun";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/sun'>Sun</Link>
        <Routes>
          <Route path='/sun' element={<Sun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
