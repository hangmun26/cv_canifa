import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Nam from "./Component/Nam";
import Nu from "./Component/Nu";
import Betrai from "./Component/Betrai";
import { URLS } from "./Component/Header_logo";
function App() {
  return (
    <Routes>
      <Route path={URLS.home} element={<Home />}></Route>
      <Route path={URLS.nam} element={<Nam />} />
      <Route path={URLS.nu} element={<Nu />} />
      <Route path={URLS.be_trai} element={<Betrai />} />
    </Routes>
  );
}
export default App;
