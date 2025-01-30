import React, { useState, useEffect } from "react";
import p5 from "p5";

// Define words for the crossword
const words = [
  { word: "Will", answer: "WILL" },
  { word: "u", answer: "U" },
  { word: "go", answer: "GO" },
  { word: "Ice skating", answer: "ICESKATING" },
  { word: "with", answer: "WITH" },
  { word: "me", answer: "ME" },
];

// Create a static crossword grid
const grid = words.map((word) => word.answer.split(""));

function Sketch() {
  const [userInput, setUserInput] = useState(
    grid.map((row) => Array(row.length).fill(""))
  );

  useEffect(() => {
    const sketch = (p) => {
      let cellSize = 50;

      p.setup = () => {
        p.createCanvas(600, 400);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(24);
      };

      p.draw = () => {
        p.background(240);

        for (let i = 0; i < grid.length; i++) {
          for (let j = 0; j < grid[i].length; j++) {
            let x = j * cellSize + 50;
            let y = i * cellSize + 50;

            p.fill(255);
            p.stroke(0);
            p.rect(x, y, cellSize, cellSize);

            if (userInput[i][j]) {
              p.fill(userInput[i][j] === grid[i][j] ? "green" : "red");
              p.text(userInput[i][j], x + cellSize / 2, y + cellSize / 2);
            }
          }
        }

        // Check if the crossword is completely solved
        const isCompleted = grid.every((row, i) =>
          row.every((letter, j) => userInput[i][j] === letter)
        );

        if (isCompleted) {
          alert("Congratulations! MY phone number is: 347-279-7732");
        }
      };

      p.mousePressed = () => {
        let col = Math.floor((p.mouseX - 50) / cellSize);
        let row = Math.floor((p.mouseY - 50) / cellSize);

        if (row >= 0 && row < grid.length && col >= 0 && col < grid[row].length) {
          let newInput = [...userInput];
          let letter = prompt("Enter a letter:");

          if (letter) {
            newInput[row][col] = letter.toUpperCase();
            setUserInput(newInput);
          }
        }
      };
    };

    const myP5 = new p5(sketch, document.getElementById("p5-container"));
    return () => myP5.remove();
  }, [userInput]);

  return (
    <div style={{ textAlign: "center" }}>
      <div id="p5-container"></div>
      <div style={{ marginTop: "20px" }}>
        <p><strong>Hints:</strong></p>
        <ul>
          <li>Hollywood actor known for "Men in Black" and "The Fresh Prince of Bel-Air"</li>
          <li>The chemical symbol for uranium</li>
          <li>Short for Pokémon ___, the mobile AR game</li>
          <li>A winter sport where you glide on frozen water</li>
          <li>"___ or without you" – a famous U2 song title</li>
          <li>The pronoun used to refer to oneself</li>
        </ul>
      </div>
    </div>
  );
}

export default Sketch;
