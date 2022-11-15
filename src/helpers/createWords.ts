export default function createWords(wordBank: string[]) {
  const tempArr = [];
  for (let i = 0; i <= 24; i++) {
    tempArr.push(wordBank[Math.floor(Math.random() * wordBank.length)]);
  }
  return tempArr;
}
