import { isPalindrome, isPalindromeWithToString } from "./task";

describe("task_01", () => {
  const data: Array<{
    num: number;
    expected: boolean;
  }> = [
    {
      num: 121,
      expected: true,
    },
    {
      num: 0,
      expected: true,
    },
    {
      num: -121,
      expected: false,
    },
    {
      num: 10,
      expected: false,
    },
  ];

  test.each(data)(
    `$#. the solution is true(without conversion to a string)`,
    ({ num, expected }) => {
      expect(isPalindrome(num)).toBe(expected);
    }
  );

  test.each(data)(
    `$#. the solution is true((with conversion to a string))`,
    ({ num, expected }) => {
      expect(isPalindromeWithToString(num)).toBe(expected);
    }
  );
});
