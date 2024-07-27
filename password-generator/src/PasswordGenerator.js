// src/PasswordGenerator.js

import React, { useState } from "react";
import "./PasswordGenerator.css";
import Advertisement from "./Advertisement";

const predefinedPasswords = {
  crew: "318522",
  admin: "987654",
  user: "123456",
  guest: "654321",
  // Add more predefined mappings here
};

const PasswordGenerator = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const generatedPassword =
      predefinedPasswords[input.toLowerCase()] || "Password not found";
    setPassword(generatedPassword);
  };

  return (
    <div className="page-container">
      <Advertisement position="top" />
      <div className="main-content">
        <Advertisement position="left" />
        <Advertisement position="left" />
        <div className="content">
          <h1>Password Generator</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a name"
            className="input-field"
          />
          <button onClick={handleGeneratePassword} className="button">
            Generate Password
          </button>
          <p className="password">Password: {password}</p>
        </div>
        <Advertisement position="right" />
        <Advertisement position="right" />
      </div>
      <Advertisement position="bottom" />
    </div>
  );
};

export default PasswordGenerator;
