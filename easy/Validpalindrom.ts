/**
 * Valid Palindrome
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * Example 1:   
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * 
 *     * @link https://leetcode.com/problems/valid-palindrome/
 */


function isPalindrome(s: string): boolean {
   const strArr = (s.match(RegExp(/[a-zA-Z0-9]/g))||[])
    if(!strArr.length) return true;
    let mid = Math.floor(strArr.length/2);
    for(let i=0;i<mid;i++){
        let first = strArr[i].toLowerCase();
        let last = strArr[strArr.length-1-i].toLowerCase();
        if(first!==last){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("ab_a")); // trueß