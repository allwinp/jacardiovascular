import { FC, useState, useEffect } from "react";

import { Text, Paper, Center } from "@mantine/core";

import "./WordCard.styles.css";

interface Props {
  word: string;
  wordTeam: number;
  spymaster: boolean;
  scoreTeam1: number;
  scoreTeam2: number;
  setScoreTeam1: Function;
  setScoreTeam2: Function;
}

const WordCard: FC<Props> = ({
  word,
  wordTeam,
  spymaster,
  scoreTeam1,
  scoreTeam2,
  setScoreTeam1,
  setScoreTeam2,
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setCardClass("card");
  }, [word, wordTeam]);

  useEffect(() => {
    setClicked(false);
  }, [word, wordTeam]);

  useEffect(() => {
    spymaster === true
      ? setCardClass(`card team${wordTeam}`)
      : setCardClass("card");
  }, [spymaster]);

  const [cardClass, setCardClass] = useState("card");

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      setCardClass(`card team${wordTeam}`);
      if (wordTeam === 1) {
        setScoreTeam1(scoreTeam1 - 1);
      } else if (wordTeam === 2) {
        setScoreTeam2(scoreTeam2 - 1);
      }
    }
  }

  return (
    <Paper onClick={handleClick} shadow="xs" p="md" className={cardClass}>
      <Text ta={"center"} sx={{ fontFamily: "Greycliff CF, sans-serif" }}>
        {word.toUpperCase()}{" "}
      </Text>
    </Paper>
  );
};

export default WordCard;
