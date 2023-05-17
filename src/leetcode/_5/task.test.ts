import { longestPalindrome } from "./task";

describe("leetcode_task_5", () => {
  const data: Array<{
    s: string;
    expected: Array<string>;
  }> = [
    {
      s: "babad",
      expected: ["aba", "bab"],
    },
    {
      s: "b",
      expected: ["b"],
    },
    {
      s: "cbbd",
      expected: ["bb"],
    },
  ];

  test.each(data)(`$#. the solution is true`, ({ s, expected }) => {
    expect(expected).toContain(longestPalindrome(s));
  });
});
