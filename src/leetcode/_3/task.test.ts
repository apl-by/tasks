import { lengthOfLongestSubstring } from "./task";

describe("leetcode_task_3", () => {
  const data: Array<{
    s: string;
    expected: number;
  }> = [
    {
      s: "abcabcbb",
      expected: 3,
    },
    {
      s: "bbbbbb",
      expected: 1,
    },
    {
      s: "pwwkew",
      expected: 3,
    },
    {
      s: "pdpv",
      expected: 3,
    },
  ];

  test.each(data)(`$#. the solution is true`, ({ s, expected }) => {
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });
});
