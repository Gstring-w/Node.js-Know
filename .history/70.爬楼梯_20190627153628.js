/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */

var cache = {};
var l, r;
var climbStairs = function(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  if (!!cache[n - 1]) {
    l = cache[n - 1];
  } else {
    cache[n - 1] = climbStairs(n - 1);
    l = cache[n - 1];
  }
  if (cache[n - 2]) {
    r = cache[n - 2];
  } else {
    cache[n - 2] = climbStairs(n - 2);

    r = cache[n - 2];
  }

  return l + r;
};
