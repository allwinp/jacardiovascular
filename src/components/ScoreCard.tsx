import { RingProgress, Text } from "@mantine/core";

interface Props {
  color: any;
  score: any;
  scoreMax: number;
}

const ScoreCard = ({ color, score, scoreMax }: Props) => {
  return (
    <RingProgress
      style={{ margin: "auto" }}
      sections={[
        { value: ((scoreMax - score) / scoreMax) * 100, color: color },
      ]}
      label={
        <Text color={color} weight={700} align="center" size="xl">
          {scoreMax - score}/{scoreMax}
        </Text>
      }
    />
  );
};

export default ScoreCard;
