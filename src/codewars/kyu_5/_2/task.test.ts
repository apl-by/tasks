import { pigIt } from "./task";

describe("codewars_kyu_5_task_2", () => {
  test("test_1: the solution is true", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  test("test_2: the solution is true", () => {
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
});
