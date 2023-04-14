import { romanToInt } from "./task";

describe("task_01", () => {
  const data: Array<{ string: string; expected: number }> = [
    { string: "III", expected: 3 },
    { string: "LVIII", expected: 58 },
    { string: "MCMXCIV", expected: 1994 },
  ];

  test.each(data)(`$#. the solution is true`, ({ string, expected }) => {
    expect(romanToInt(string)).toBe(expected);
  });
});
