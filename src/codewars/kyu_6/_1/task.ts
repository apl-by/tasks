//  6 kyu  Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

export function towerBuilder(nFloors: number) {
  const maxCount = nFloors * 2 - 1;
  const arr = [];
  for (let i = 1; i <= nFloors; i++) {
    const currentCount = i * 2 - 1;
    const emptyCount = maxCount - currentCount;
    const string = "*"
      .repeat(currentCount)
      .padStart(maxCount - emptyCount / 2)
      .padEnd(maxCount);

    arr.push(string);
  }
  return arr;
}
