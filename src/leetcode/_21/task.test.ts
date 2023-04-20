import { isValid } from "./task";

describe("leetcode_task_21", () => {
  const data: Array<{
    str: string;
    expected: boolean;
  }> = [
    {
      str: "()",
      expected: true,
    },
    {
      str: "()[]{}",
      expected: true,
    },
    {
      str: "(]",
      expected: false,
    },
    {
      str: "[",
      expected: false,
    },
    {
      str: "((",
      expected: false,
    },
  ];

  test.each(data)(
    `$#. the solution is true(without conversion to a string)`,
    ({ str, expected }) => {
      expect(isValid(str)).toBe(expected);
    }
  );
});
