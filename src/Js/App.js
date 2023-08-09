import React, { useState } from "react";
import Login from "../Js/Login.js";
import Dashboard from "../Js/Dashboard.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Dashboard />: <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
