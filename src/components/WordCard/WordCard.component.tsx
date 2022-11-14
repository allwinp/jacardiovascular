import { FC, useState, useEffect } from "react";
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
  useEffect(() => {
    setCardClass("card");
  }, [word, wordTeam]);

  useEffect(() => {
    spymaster === true
      ? setCardClass(`card team${wordTeam}`)
      : setCardClass("card");
  }, [spymaster]);

  const [cardClass, setCardClass] = useState("card");

  function handleClick() {
    setCardClass(`card team${wordTeam}`);
    if (wordTeam === 1) {
      setScoreTeam1(scoreTeam1 - 1);
    } else if (wordTeam === 2) {
      setScoreTeam2(scoreTeam2 - 1);
    }
  }

  return (
    <div onClick={handleClick} className={cardClass}>
      {word.toUpperCase()}
    </div>
  );
};

export default WordCard;
