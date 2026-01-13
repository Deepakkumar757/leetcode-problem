/**
 * Add Two Numbers
 * 
 You are given two non-empty linked lists representing two non-negative integers. 
 The digits are stored in reverse order, and each of their nodes contains a single digit. 
 Add the two numbers and return the sum as a linked list.
    
 You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
 

const getNumFromList = (list: ListNode|null) => {
    let num: number[] = [];
    while (list) {
        num.push(list.val);
        list = list.next;
    }
    return num;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const num1 = getNumFromList(l1)
    const num2 = getNumFromList(l2)
    let num1Len = num1.length;
    let num2Len=num2.length;
    let max = num1Len > num2Len ? num1Len-1 : num2Len-1;
    let sumArr:number[] = [], remaining = 0;
    for(let i=0; i<=max;i++){
      let cum = (num1[i]||0) + (num2[i]||0) + remaining;
      if(cum>=10){
        remaining = 1;
        sumArr.push(cum%10);
      }else{
        remaining = 0;
        sumArr.push(cum);
      }
    }
    if(remaining===1) sumArr.push(1);
    let resultList = new ListNode();
    let temp = resultList;

    for (let val of sumArr){
      temp.next = new ListNode(val);
      temp = temp.next;
    }
    return resultList.next;
};

// Example Usage:
// Creating first linked list representing the number 342 (stored in reverse order as 2 -> 4 -> 3)
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// Creating second linked list representing the number 465 (stored in reverse order as 5 -> 6 -> 4)
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Adding the two numbers
let resultList = addTwoNumbers(l1, l2);
// The resultList should now represent the linked list: 7 -> 0 -> 8 (which is the number 807)