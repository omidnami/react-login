import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Dashboaed from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboaed} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
