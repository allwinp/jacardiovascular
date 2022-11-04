import { WordCard } from "./components";

import "./App.css";

const wordTeams = [
  1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
].sort(function (a, b) {
  return Math.random() > 0.5 ? 1 : -1;
});

const App = () => {
  const words: string[] = [
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

  return (
    <main>
      <div className="card-grid">
        {Array(25)
          .fill(0)
          .map((x, index) => {
            return (
              <WordCard
                key={index}
                keyValue={index}
                word={words[index]}
                wordTeam={wordTeams[index]}
              />
            );
          })}
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Reset
      </button>
    </main>
  );
};

export default App;
