/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};
