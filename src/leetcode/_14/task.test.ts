import { longestCommonPrefix } from "./task";

describe("task_01", () => {
  const data: Array<{
    strs: Array<string>;
    expected: string;
  }> = [
    {
      strs: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      strs: ["dog", "racecar", "car"],
      expected: "",
    },
    {
      strs: ["dog"],
      expected: "dog",
    },
  ];

  test.each(data)(
    `$#. the solution is true(without conversion to a string)`,
    ({ strs, expected }) => {
      expect(longestCommonPrefix(strs)).toBe(expected);
    }
  );
});
