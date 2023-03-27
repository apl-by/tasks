import { towerBuilder } from "./task";

describe("task_01", () => {
  test("the solution is true", () => {
    expect(towerBuilder(2)).toEqual([" * ", "***"]);
    expect(towerBuilder(3)).toEqual(["  *  ", " *** ", "*****"]);
    expect(towerBuilder(4)).toEqual([
      "   *   ",
      "  ***  ",
      " ***** ",
      "*******",
    ]);
  });
});
