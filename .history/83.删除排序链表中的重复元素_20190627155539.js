/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var deleteDuplicates = function(head) {
  if (head.length == 0) return;
  var hash = {};
  var arr = [];
  for (var i = 0; i < head.length; i++) {
    if (!hash[head[i]]) {
      hash[head[i]] = true;
      arr.push(head[i]);
    }
  }
};
