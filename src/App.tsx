import { WordCard } from "./components";
import { useState } from "react";

import "./App.css";

function createWordTeams() {
  // 8 neutral, 8 words for team1, 8 words for team 2, 1 black word
  return [Array(7).fill(0), Array(9).fill(1), Array(8).fill(2), 3]
    .flat()
    .sort(function (a, b) {
      return Math.random() > 0.5 ? 1 : -1;
    });
}

const wordBank = [
  "writing",
  "ad",
  "feedback",
  "television",
  "chemistry",
  "menu",
  "area",
  "power",
  "guest",
  "revolution",
  "awareness",
  "software",
  "king",
  "committee",
  "inspector",
  "percentage",
  "relationship",
  "editor",
  "bread",
  "connection",
  "situation",
  "orange",
  "wife",
  "mom",
  "university",
  "manager",
  "bathroom",
  "artisan",
  "homework",
  "reception",
  "bonus",
  "analyst",
  "movie",
  "variation",
  "dinner",
  "scene",
  "person",
  "teaching",
  "dealer",
  "penalty",
  "coffee",
  "reaction",
  "advice",
  "son",
  "buyer",
  "math",
  "country",
  "satisfaction",
  "midnight",
  "industry",
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
  const tempArr = [];
  for (let i = 0; i <= 24; i++) {
    tempArr.push(wordBank[Math.floor(Math.random() * wordBank.length)]);
  }
  return tempArr;
}

const App = () => {
  const [words, setWords] = useState(createWords(wordBank));
  const [wordTeams, setWordTeams] = useState(createWordTeams());
  const [spymaster, setSpymaster] = useState(false);
  const [scoreTeam1, setScoreTeam1] = useState(9);
  const [scoreTeam2, setScoreTeam2] = useState(8);

  return (
    <main>
      <div className="score-card team1">{scoreTeam1}</div>

      <div className="card-grid">
        {words.map((word, index) => {
          return (
            <WordCard
              key={index}
              word={words[index]}
              wordTeam={wordTeams[index]}
              spymaster={spymaster}
              scoreTeam1={scoreTeam1}
              scoreTeam2={scoreTeam2}
              setScoreTeam1={setScoreTeam1}
              setScoreTeam2={setScoreTeam2}
            />
          );
        })}
      </div>
      <div className="score-card team2">{scoreTeam2}</div>
      <div className="buttons-container">
        <button
          onClick={() => {
            setWords(createWords(wordBank));
            setWordTeams(createWordTeams());
            setSpymaster(false);
            setScoreTeam1(9);
            setScoreTeam2(8);
          }}
        >
          New Game
        </button>
        <button
          className="spymaster-button"
          onClick={() => {
            spymaster === false ? setSpymaster(true) : setSpymaster(false);
          }}
        >
          Spymaster
        </button>
      </div>
    </main>
  );
};

export default App;
