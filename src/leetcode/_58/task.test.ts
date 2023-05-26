import { lengthOfLastWord } from "./task";

describe("leetcode_task_58", () => {
  const data: Array<{
    s: string;
    expected: number;
  }> = [
    {
      s: "Hello World",
      expected: 5,
    },
    {
      s: "string",
      expected: 6,
    },
    {
      s: "   fly me   to   the moon  ",
      expected: 4,
    },
    {
      s: "luffy is still joyboy",
      expected: 6,
    },
  ];

  test.each(data)(`$#. the solution is true`, ({ s, expected }) => {
    expect(lengthOfLastWord(s)).toEqual(expected);
  });
});
