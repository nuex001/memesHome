import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Memers from "./components/pages/Memers";
import Memer from "./components/pages/Memer";

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/memers" element={<Memers/>} />
          <Route exact path="/memer/:token" element={<Memer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
