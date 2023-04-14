import { sumIntervals } from "./task";

describe("task_01", () => {
  const data: Array<{ intervals: Array<[number, number]>; expected: number }> =
    [
      { intervals: [[1, 5]], expected: 4 },
      {
        intervals: [
          [1, 5],
          [6, 10],
        ],
        expected: 8,
      },
      {
        intervals: [
          [1, 5],
          [1, 5],
        ],
        expected: 4,
      },
      {
        intervals: [
          [1, 4],
          [7, 10],
          [3, 5],
        ],
        expected: 7,
      },
      {
        intervals: [[-1e9, 1e9]],
        expected: 2e9,
      },
      {
        intervals: [
          [0, 20],
          [-1e8, 10],
          [30, 40],
        ],
        expected: 1e8 + 30,
      },
    ];

  test.each(data)(`$#. the solution is true`, ({ intervals, expected }) => {
    expect(sumIntervals(intervals)).toBe(expected);
  });
});
