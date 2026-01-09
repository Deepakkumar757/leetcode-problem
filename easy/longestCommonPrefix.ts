
/* Lomgest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/


function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    let prefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        let isCommon = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                isCommon = false;
                break;
            }
        }
        if (!isCommon) break;
        prefix += strs[0][i]
    }
    return prefix
};