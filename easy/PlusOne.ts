/**
 * Plus One
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * @link https://leetcode.com/problems/plus-one/
 */


function plusOne(digits: number[]): number[] {
    let remaining = 1;
    for (let i = (digits.length - 1); i >= 0; i--) {
        const currentSum = (digits[i] + remaining)
        if ((currentSum / 10) >= 1) {
           digits[i] = 0;
            remaining = 1;
        } else {
            digits[i] = currentSum;
            remaining = 0;
        }
    }
    if (remaining >= 1) digits.unshift(remaining)
    return digits;
};

function plusOneOptimized(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}