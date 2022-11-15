import { SimpleGrid } from "@mantine/core";
import WordCard from "./WordCard/WordCard.component";

const CardGrid = ({
  words,
  wordTeams,
  spymaster,
  scoreTeam1,
  scoreTeam2,
  setScoreTeam1,
  setScoreTeam2,
}: any) => {
  return (
    <SimpleGrid cols={5}>
      {words.map((word: any, index: any) => {
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
    </SimpleGrid>
  );
};

export default CardGrid;
