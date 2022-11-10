import { FC, useState, useEffect } from "react";
import "./WordCard.css";

interface Props {
  word: string;
  wordTeam: number;
  spymaster: boolean;
}

const WordCard: FC<Props> = ({ word, wordTeam, spymaster }) => {
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
  }

  return (
    <div onClick={handleClick} className={cardClass}>
      {word.toUpperCase()}
    </div>
  );
};

export default WordCard;
