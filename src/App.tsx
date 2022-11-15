import { CardGrid, ScoreCard } from "./components";

import { createWords, createWordTeams } from "./helpers/index";

import { wordBank } from "./data/wordBank";

import { useState } from "react";
import { MantineProvider, Button, Container, Flex } from "@mantine/core";
import { theme } from "./theme";

const App = () => {
  const [words, setWords] = useState(createWords(wordBank));
  const [wordTeams, setWordTeams] = useState(createWordTeams());
  const [spymaster, setSpymaster] = useState(false);
  const [scoreTeam1, setScoreTeam1] = useState(9);
  const [scoreTeam2, setScoreTeam2] = useState(8);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Flex>
        <ScoreCard score={scoreTeam1} scoreMax={9} color="#CAAAF3" />
        <Container size="lg" mt={"10vh"}>
          <CardGrid
            words={words}
            wordTeams={wordTeams}
            spymaster={spymaster}
            scoreTeam1={scoreTeam1}
            scoreTeam2={scoreTeam2}
            setScoreTeam1={setScoreTeam1}
            setScoreTeam2={setScoreTeam2}
          />
        </Container>

        <ScoreCard score={scoreTeam2} scoreMax={8} color="aquamarine" />

        <Button.Group style={{ position: "absolute" }}>
          <Button
            onClick={() => {
              setWords(createWords(wordBank));
              setWordTeams(createWordTeams());
              setSpymaster(false);
              setScoreTeam1(9);
              setScoreTeam2(8);
            }}
            variant="default"
          >
            New Game
          </Button>
          <Button
            onClick={() => {
              spymaster === false ? setSpymaster(true) : setSpymaster(false);
            }}
            variant="default"
          >
            Spymaster
          </Button>
        </Button.Group>
      </Flex>
    </MantineProvider>
  );
};

export default App;
