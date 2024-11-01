/* exported toObject */
function toObject(keyValuePair: [string, unknown]): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
