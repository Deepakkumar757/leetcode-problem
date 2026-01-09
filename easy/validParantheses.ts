/**Valid Parentheses
 * 
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
@link https://leetcode.com/problems/valid-parentheses/
 */


function isValid(s: string): boolean {
    const openParantheses = {
        "{": "}",
        "(": ")",
        "[": "]",
    };
    let arr = '';
    for (const char of s) {
        let lastOpenedParanthese = arr[arr.length - 1];
        if (char in openParantheses) {
            arr += openParantheses[char]
        } else if (lastOpenedParanthese && char === lastOpenedParanthese) {
            arr = arr.slice(0, -1)
        } else {
            return false
        }
    }
    return arr.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true