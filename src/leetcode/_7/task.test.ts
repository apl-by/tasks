import { reverse } from "./task";

describe("leetcode_task_3", () => {
  const data: Array<{
    x: number;
    expected: number;
  }> = [
    {
      x: 123,
      expected: 321,
    },
    {
      x: -123,
      expected: -321,
    },
    {
      x: 120,
      expected: 21,
    },
  ];

  test.each(data)(`$#. the solution is true`, ({ x, expected }) => {
    expect(reverse(x)).toBe(expected);
  });
});
