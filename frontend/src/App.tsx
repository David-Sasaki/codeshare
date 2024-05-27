import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Join from "./components/Join";
import Room from "./components/Room";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/session-join/:id" element={<Join />} />
        <Route path="/session/:id/:user" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;
