import { WordCard } from "./components";
import { useState } from "react";

import "./App.css";

function createWordTeams() {
  return [Array(8).fill(0), Array(8).fill(1), Array(8).fill(2), 3]
    .flat()
    .sort(function (a, b) {
      return Math.random() > 0.5 ? 1 : -1;
    });
}
const wordBank = [
  "language",
  "breath",
  "stretch",
  "competition",
  "view",
  "straw",
  "protect",
  "swift",
  "murky",
  "whole",
  "skirt",
  "school",
  "tidy",
  "crawl",
  "tangible",
  "smash",
  "magical",
  "condition",
  "value",
  "aloof",
  "snore",
  "behave",
  "birds",
  "squirrel",
  "spark",
];

function createWords(wordBank: string[]) {
  return wordBank.sort((a: string, b: string) =>
    Math.random() > 0.5 ? 1 : -1
  );
}

const App = () => {
  const [words, setWords] = useState(createWords(wordBank));
  const [wordTeams, setWordTeams] = useState(createWordTeams());

  return (
    <main>
      <div className="card-grid">
        {words.map((word, index) => {
          return (
            <WordCard
              key={index}
              word={words[index]}
              wordTeam={wordTeams[index]}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          setWords(createWords(wordBank));
          setWordTeams(createWordTeams());
        }}
      >
        New Game
      </button>
    </main>
  );
};

export default App;
