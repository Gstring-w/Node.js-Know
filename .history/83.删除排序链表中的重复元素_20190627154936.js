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
  var hash = {};
  var result = new ListNode(head.val);

  while (head.next) {
    if (!hash[head.next.val]) {
      hash[head.next.val] = true;
      result.next = head.next;
    }

    head = head.next;
  }
};
