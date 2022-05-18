import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import LandingPage from "./pages/landingPage/index";
import MonstersPage from "./pages/monstersPage/index";
import MonsterPage from "./pages/monsterPage/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
        <Route path="/monsters/:id" element={<MonsterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
