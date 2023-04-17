import { twoSum } from "./task";

describe("task_01", () => {
  const data: Array<{
    nums: Array<number>;
    target: number;
    expected: [number, number];
  }> = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
      expected: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      expected: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      expected: [0, 1],
    },
  ];

  test.each(data)(`$#. the solution is true`, ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toEqual(expected);
  });
});
