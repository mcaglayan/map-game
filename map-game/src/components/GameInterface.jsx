// src/components/GameInterface.jsx
import React, { useState } from "react";
import MapGame from "./MapGame";

const GameInterface = () => {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [hintLevel, setHintLevel] = useState(0);

  const data = [
    ["India", 4000],
    ["Kenya", 3000],
    ["Ukraine", 4500],
    ["Ethiopia", 3400],
  ]; // Example data

  const handleGuess = () => {
    setGuesses([...guesses, guess]);
    setGuess("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Map Game</h1>
      <MapGame data={data} hintLevel={hintLevel} />
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Type your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleGuess}>Submit</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Guesses:</h3>
        <ul>
          {guesses.map((g, index) => (
            <li key={index}>{g}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setHintLevel(1)}>Hint 1</button>
        <button onClick={() => setHintLevel(2)}>Hint 2</button>
        <button onClick={() => setHintLevel(3)}>Hint 3</button>
      </div>
    </div>
  );
};

export default GameInterface;
