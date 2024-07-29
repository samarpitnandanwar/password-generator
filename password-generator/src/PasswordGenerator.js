// src/PasswordGenerator.js

import React, { useState } from "react";
import "./PasswordGenerator.css";
import Advertisement from "./Advertisement";

const predefinedPasswords = {
  "Crew 2014": "318522",
  "Thor 2011": "thor@_2011",
  "Madgaon Express 2024": "madgaon@2024",
  "Chandu Champion 2024": "chandu@2024",
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
        <div className="content">
          <h1>Password Generator</h1>
          <p>Type the Movie Name in Capital Letters</p>
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
      </div>
      <Advertisement position="bottom" />
    </div>
  );
};

export default PasswordGenerator;
