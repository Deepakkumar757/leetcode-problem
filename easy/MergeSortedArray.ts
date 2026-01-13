/**
 * Merge Sorted Array
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    * @link https://leetcode.com/problems/merge-sorted-array/
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1: number = m - 1
    let p2: number = n - 1
    let k: number = nums1.length - 1

    while (p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[k] = nums1[p1]
            p1--
        } else {
            nums1[k] = nums2[p2]
            p2--
        }
        k--
    }
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3)); // [1,2,2,3,5,6]
console.log(merge([1],1,[],0));