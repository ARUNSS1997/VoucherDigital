// import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addclient from "./Addclient";
import Login from "./login";
import Sidebar from "./sidebar";
import Viewclient from "./viewclient";

export default function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add" element={<Addclient />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/view" element={<Viewclient />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}
