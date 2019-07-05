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
  var result = [];
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += carry;
    result.push([...digits]);
  }

  if (digits[digits.length - 1] == 9) {
    digits[digits.length - 1] = 0;
    carry = 1;
    result.push(digits.pop());
    plusOne(digits, 1);
  }

  if (digits.length == 0 && carry == 1) {
    result.unshift(carry);
  }
  //   return plusOne(digits, 1);
  return result;
};
