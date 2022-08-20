import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errand from "./pages/Errand";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Errand />} />
        <Route path="/shops" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
