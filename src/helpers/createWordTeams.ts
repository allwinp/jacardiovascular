export default function createWordTeams() {
  // 8 neutral, 8 words for team1, 8 words for team 2, 1 black word
  return [Array(7).fill(0), Array(9).fill(1), Array(8).fill(2), 3]
    .flat()
    .sort(function (a, b) {
      return Math.random() > 0.5 ? 1 : -1;
    });
}
