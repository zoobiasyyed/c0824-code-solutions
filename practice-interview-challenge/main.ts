// create a function named getRangereport with two parameters
// should return an OBJECT that holds information about the numbers
// between the START and END parameters
// START and END should be included in the range of numbers

interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  const newObj: RangeReport = {
    odds: [],
    evens: [],
    range: [],
    average: 0,
    total: 0,
  };
  const range = [];
  const odds = [];
  const evens = [];
  let total = 0;

  for (let i = start; i <= end; i++) {
    range.push(i);
    if (i % 2 !== 0) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }
  for (let i = 0; i < newObj.range.length; i++) {
    total += range[i];
  }

  const average = total / range.length;

  newObj.average = average;
  newObj.total = total;
  newObj.odds = odds;
  newObj.evens = evens;
  newObj.range = range;

  return newObj;
}
