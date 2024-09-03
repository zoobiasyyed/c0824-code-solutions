/* exported oddOrEven */
function oddOrEven(numbers: number[]): unknown[] {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      newArr.push('odd');
    } else {
      newArr.push('even');
    }
  }
  return newArr;
}
