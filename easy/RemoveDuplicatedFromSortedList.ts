/**
 * Remove Duplicates from Sorted List
 * 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result = head;
    while(result && result.next){
        if(result.val === result.next.val){
            result.next = result.next.next;
        }else{
            result = result.next;
        }
    }
    return head;
};

// Example Usage:
// Creating a sorted linked list with duplicates: 1 -> 1 -> 2 -> 3 -> 3
let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

// Removing duplicates
let updatedList = deleteDuplicates(head);
// The updatedList should now represent the linked list: 1 -> 2 -> 3