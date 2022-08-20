import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errand from "./pages/Errand";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Errand />} />
        <Route path="/shops" element={<Errand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
