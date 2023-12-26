// Home.jsx
import './App.css';
import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import VacationApp from "./VacationApp";  // Import VacationApp

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in on page load
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const handleLogout = () => {
    // Perform any logout logic here
    // For example, clear the user session, update state, etc.
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>로그아웃</button>
          <VacationApp />  {/* Render VacationApp component */}
        </>
      ) : (
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default Home;  // Export Home component as default
