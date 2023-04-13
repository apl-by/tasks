import { pigIt } from "./task";

describe("task_01", () => {
  test("test_1: the solution is true", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  test("test_2: the solution is true", () => {
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
});
