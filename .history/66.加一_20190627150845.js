/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits, carry = 1, result = []) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += carry;
    result = digits;
  } else if (digits[digits.length - 1] == 9) {
    digits[digits.length - 1] = 0;
    carry = 1;
    result.push(digits[digits.length - 1]);
    digits.pop();
    if (digits.length !== 0) {
      result = [...plusOne(digits, carry, result)];
    } else {
      result = [1, ...result];
    }
  }
  if (digits.length == 0 && carry == 1) {
    result = [1, ...result];
  }

  return result;
};
