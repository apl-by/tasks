import { checkIfInstanceOf } from "./task";

describe("leetcode_task_2618", () => {
  test(`1. the solution is true`, () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
  });

  test(`2. the solution is true`, () => {
    class Animal {}
    class Dog extends Animal {}

    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
  });

  test(`3. the solution is true`, () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false);
  });

  test(`4. the solution is true`, () => {
    expect(checkIfInstanceOf(5, Number)).toBe(true);
  });

  test(`5. the solution is true`, () => {
    expect(checkIfInstanceOf(null, Number)).toBe(false);
  });

  test(`6. the solution is true`, () => {
    expect(checkIfInstanceOf([], null)).toBe(false);
  });

  test(`7. the solution is true`, () => {
    expect(checkIfInstanceOf(Symbol(), Symbol)).toBe(true);
  });
});
