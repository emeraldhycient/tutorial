import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./pages/Carts";
import Errand from "./pages/Errand";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Errand />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
