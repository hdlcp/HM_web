import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StaffList from "./components/StaffList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<StaffList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
