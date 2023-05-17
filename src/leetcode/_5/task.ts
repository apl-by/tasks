// 5. Longest Palindromic Substring

// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function (s: string) {
     let res = "";
  let valueLastInd = s.length - 1;

  const isPolindromic = (str: string) => str === str.split("").reverse().join("");
  for (let i = 0; i < s.length || res.length < s.length - i; i++) {
    const value = s[i];
    valueLastInd = s.lastIndexOf(value);
    if (i <= valueLastInd && res.length <= valueLastInd - i) {
      while (i <= valueLastInd) {
        const subStr = s.slice(i, valueLastInd + 1);

        if (isPolindromic(subStr) && subStr.length > res.length) {
          res = subStr;
          break;
        }
        valueLastInd = s.lastIndexOf(value, valueLastInd - 1);
      }
    }
  }

  return res;
};