import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carts from "./pages/Carts";
import Errand from "./pages/Errand";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Errand />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
