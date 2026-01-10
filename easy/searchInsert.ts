/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

@link https://leetcode.com/problems/search-insert-position/
*/

// BruteForce Approach With O(n) time complexity
function searchInsert1(nums: number[], target: number): number {
    if(nums.length === 1) return nums[0]<target ? 1 : 0;
    const mid = Math.floor(nums.length/2);
    for(let i=0; i<=mid;i++){
        let lastInd = (nums.length-1)-i
        if(nums[i]===target) return i;
        if(nums[lastInd] === target) return lastInd
        if(nums[i]>target) return i === 0 ? 0 : i;
        if(nums[lastInd]<target) return lastInd+1;
    }
    return mid
};

// Optimal Approach Using Binary Search with O(log n) time complexity
function searchInsert(nums: number[], target: number): number {
let min =0, max = nums.length-1;
    let p=0;
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        console.log(nums[mid],nums[min], nums[max], nums[mid]<target)
        if(nums[mid]===target) return mid;
        if(nums[mid]<target){
            min = mid+1;
            p = mid+1
        }else{
            max = mid-1;
            p=mid;
        }
    }
    return p;
};

console.log(searchInsert([1,3,5,6],5)); // 2
console.log(searchInsert([1,3,5,6],2)); // 1
console.log(searchInsert([1,3,5,6],7)); // 4
console.log(searchInsert([1,3,5,6],0)); // 0
console.log(searchInsert([1],0)); // 0