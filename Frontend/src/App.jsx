import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import History from "./pages/History";
import RoomDetail from "./pages/RoomDetail";

import "./App.css";

function App() {
  const [user, setUser] = useState(0);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roomdetail/:id" element={<RoomDetail />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
