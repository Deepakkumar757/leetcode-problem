/**
 * Remove Duplicates from Sorted Array
 * 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length
int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

@link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

// Two pointers approach
function removeDuplicates(nums: number[]): number {
    if(!nums.length) return 0;

    let k = 1;
    // We have to rearrange the array in place
    for(let i=1; i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5