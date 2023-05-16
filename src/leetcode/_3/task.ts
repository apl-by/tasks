// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s: string) {
  let curS = s;
  let res = "";
  let draft = "";
  let obj: { [key: string]: boolean } = {};
  let i = 0;

  while (i < curS.length) {
    const value = curS[i];
    if (obj[value] !== undefined) {
      res = res.length < draft.length ? draft : res;
      curS = curS.slice(curS.indexOf(value) + 1);
      draft = "";
      obj = {};
      i = 0;
      continue;
    }
    draft += value;
    obj[value] = true;
    i++;
  }

  return Math.max(res.length, draft.length);
};
