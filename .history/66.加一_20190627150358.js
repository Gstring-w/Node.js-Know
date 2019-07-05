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
    console.log(1);
    result = digits;
  } else if (digits[digits.length - 1] == 9) {
    console.log(2);
    digits[digits.length - 1] = 0;
    carry = 1;
    // result.push(digits[digits.length - 1]);
    digits.pop();
    result = [...plusOne(digits, carry, result)];
  }
  if (digits.length == 0 && carry == 1) {
    result = [1, ...result];
  }

  return result;
};
