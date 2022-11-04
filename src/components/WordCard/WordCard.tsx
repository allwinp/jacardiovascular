import { FC, useState } from "react";
import "./WordCard.css";

interface Props {
  keyValue: number;
  word: string;
  wordTeam: number;
}

const WordCard: FC<Props> = ({ keyValue, word, wordTeam }) => {
  const [cardClass, setCardClass] = useState("card");
  return (
    <div
      className={cardClass}
      onClick={() => {
        setCardClass(`card team${wordTeam}`);
      }}
    >
      {word.toUpperCase()}
    </div>
  );
};

export default WordCard;
