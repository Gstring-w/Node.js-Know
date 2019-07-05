/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits, carry = 1) {
  //   if (digits.length == 0) return carry;
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += carry;
    return digits;
  }

  if (digits[digits.length - 1] == 9) {
    digits[digits.length - 1] = 0;
    carry = 1;
    digits.pop();
    if (digits.length == 0) {
      digits.unshift(carry);
    }
  }
  return plusOne(digits, 1);
};
