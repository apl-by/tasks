// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs: Array<string>) {
  const sortedArr = strs.sort();

  for (let i = 0; i < sortedArr[0].length; i++) {
    if (sortedArr.at(0)?.[i] !== sortedArr.at(-1)?.[i]) {
      return sortedArr.at(0)?.slice(0, i);
    }
  }
  return sortedArr.at(0);
};
