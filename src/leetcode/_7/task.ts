// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
export const reverse = function (x: number) {
  const str = String(x);
  const newStr =
    x < 0
      ? "-" +
        str
          .replace(/^-|0*$/g, "")
          .split("")
          .reverse()
          .join("")
      : str.replace(/0*$/g, "").split("").reverse().join("");
  const num = Number(newStr);
  return num >= (-2) ** 31 && num <= 2 ** 31 - 1 ? num : 0;
};
