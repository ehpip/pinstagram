import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Login } from "./components";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userItem = localStorage.getItem("user");
      const User =
        userItem && userItem !== "undefined" ? JSON.parse(userItem) : null;

      if (!User) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
