import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Star Components:</h2>
      <Star color="pink" isFilled={true} />
      <Star color="pink" isFilled />
      <Star color="indigo" isFilled={undefined} />
      <h2>Rating Component (uses Stars):</h2>
      <Rating stars={4} />
    </div>
  );
}

export default App;
