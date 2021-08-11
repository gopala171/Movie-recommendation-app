import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var genre = {
    action: [
      { name: "inglourious basterds", rating: "4.5/5" },
      { name: "John Wick", rating: "4.6/5" }
    ],
    thriller: [
      { name: "Don't Breathe", rating: "3.8/5" },
      { name: "gone girl", rating: "4/5" }
    ],
    drama: [
      { name: "the shawshank redemption", rating: "5/5" },
      { name: "green book", rating: "4.8/5" }
    ]
  };
  var [selectedGenre, setGenre] = useState("drama");

  function clickHandler(input) {
    setGenre(input);
  }
  return (
    <div className="App">
      <h2> 🎬 Movie recommendation </h2>
      <hr />
      <p>Checkout my favorite movies. Select a genre and pick one</p>
      <div>
        {Object.keys(genre).map((input) => (
          <button
            onClick={() => clickHandler(input)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {input}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {genre[selectedGenre].map((item) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
