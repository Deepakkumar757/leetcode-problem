/** Merge Two Sorted List
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 * 
 */

/**
 * Definition for singly-linked list.
 **/
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
     let dummy = new ListNode(0);
     // pointer to build the new list
    let op = dummy;
// traverse both lists until one of them is exhausted
    while (list1 && list2) {
        // compare the values of the two lists and add the smaller one to the new list
        if (list1.val <= list2.val) {
            // if list1 value is smaller, add it to the new list and move the pointer of list1 forward
            op.next = list1;
            list1 = list1.next;
        } else {
            // if list2 value is smaller, add it to the new list and move the pointer of list2 forward
            op.next = list2;
            list2 = list2.next;
        }
        // move the pointer of the new list forward to continue building
        op = op.next;
    }
    // if there are remaining nodes in either list, append them to the new list
    op.next = list1 || list2;

    return dummy.next;
};

// Example Usage:
// Creating first sorted linked list: 1 -> 2 -> 4
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// Creating second sorted linked list: 1 -> 3 -> 4
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merging the two lists
let mergedList = mergeTwoLists(list1, list2);