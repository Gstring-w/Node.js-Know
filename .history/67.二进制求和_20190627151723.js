/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var result = "";
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (+a[i] + +b[j] == 2) {
        result += 0;
      } else {
        result += +a[i] + +b[j];
      }
    }
  }
};
