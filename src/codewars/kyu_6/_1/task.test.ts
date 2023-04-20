import { towerBuilder } from "./task";

describe("codewars_kyu_6_task_1", () => {
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
