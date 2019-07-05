/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var carry = 0;
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      if (carry != 0) {
      } else {
        digits[i] = 0;
        carry = 1;
      }
    }
  }
};
