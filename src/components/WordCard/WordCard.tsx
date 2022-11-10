import { FC, useState, useEffect } from "react";
import "./WordCard.css";

interface Props {
  word: string;
  wordTeam: number;
}

const WordCard: FC<Props> = ({ word, wordTeam }) => {
  useEffect(() => {
    setCardClass("card");
  }, [word, wordTeam]);

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
