import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Seker from "../src/pages/Seker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Seker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
