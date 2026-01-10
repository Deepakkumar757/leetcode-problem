/**
 * Find the Index of the First Occurrence in a String
 
 Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
@link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

// My initial approach using built-in functions
function strStr1(haystack: string, needle: string): number {
    let haystackLen = haystack.length, needlelen = needle.length;
    if (haystackLen < needlelen) return -1;
    for (let i = 0; i < haystackLen; i++) {
        if ((i + needlelen) > haystackLen) return -1;
        let sliceVal = haystack.slice(i, i + needlelen);
        if (sliceVal === needle) return i;
    }
    return -1;
};




// best approach is the sliding window approach
function strStr(haystack: string, needle: string): number {
    if (needle === '') return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        for (; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1