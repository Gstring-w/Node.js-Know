/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  for (var i = 1; i < x; i++) {
    if (i * i =< x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};
