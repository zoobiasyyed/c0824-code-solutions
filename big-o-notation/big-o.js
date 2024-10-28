/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1) const time operation
  const unique = []; // 1 * 1 = O(1) const time operation
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 1 * n = O(n)
  ) {
    const word = words[i]; // 2 * n = O(n)
    if (!seen[word]) {
      // 3 * n = O(n)
      seen[word] = true; // 2 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n)
    i++ // 1 * n = O(1n)
  ) {
    const word = words[i]; // 2 * n = O(2n)
    let isUnique = true; // 1 * n = O(n)
    for (
      let c = 0; // 1 * n = O(1n)
      c < i; // 1 * n * n = O(1n^2)
      c++ // 1 * n * n = O(1n^2)
    ) {
      const comparing = words[c]; // 3 * n * n  = O(3n ^ 2)
      if (comparing === word) {
        // 2 * n * n = O(2n ^ 2)
        isUnique = false; // 1 * n * n= O(1n ^ 2)
      }
    }
    if (isUnique) {
      // 1 * n  = O(n)
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
