/* exported capitalize */
function capitalize(word: string): string {
  const x = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  return x + rest;
}
