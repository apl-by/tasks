import { kidsWithCandies } from "./task";

describe("leetcode_task_1431", () => {
  const data: Array<{
    candies: Array<number>;
    extraCandies: number;
    expected: Array<boolean>;
  }> = [
    {
      candies: [2, 3, 5, 1, 3],
      extraCandies: 3,
      expected: [true, true, true, false, true],
    },
    {
      candies: [4, 2, 1, 1, 2],
      extraCandies: 1,
      expected: [true, false, false, false, false],
    },
    {
      candies: [12, 1, 12],
      extraCandies: 10,
      expected: [true, false, true],
    },
  ];

  test.each(data)(
    `$#. the solution is true`,
    ({ candies, extraCandies, expected }) => {
      expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    }
  );
});
