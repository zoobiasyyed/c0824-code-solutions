/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArr: string[] = [];
  for (let i = 0; i <= words.length - 1; i++) {
    newArr.splice(i, 1, words[i] + suffix);
  }
  return newArr;
}
