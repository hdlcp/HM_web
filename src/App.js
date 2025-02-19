import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StaffList from "./components/StaffList";
import Header from "./components/Header"; // Import du Header

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Affiche le logo et le message de bienvenue */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<StaffList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
