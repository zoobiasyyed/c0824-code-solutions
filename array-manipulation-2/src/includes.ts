/* exported includes */
function includes(array: unknown[], value: unknown): boolean {
  for (let i = 0; i <= array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
