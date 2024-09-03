/* exported getWords */
function getWords(string: string): string[] {
  if (string.length > 1) {
    return string.split(' ');
  }

  return [];
}
