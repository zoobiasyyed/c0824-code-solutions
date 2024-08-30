/* exported getValues */
function getValues(object: Record<string, unknown>): unknown[] {
  const newArr: unknown[] = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
