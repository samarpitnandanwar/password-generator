// src/Advertisement.js

import React from "react";
import "./Advertisement.css";

const Advertisement = ({ position }) => {
  return (
    <div className={`advertisement ${position}`}>
      <p>Ad Space</p>
    </div>
  );
};

export default Advertisement;
