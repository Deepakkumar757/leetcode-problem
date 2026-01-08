/** Palindrome Number */

// Given an integer x, return true if x is a palindrome, and false otherwise.


function isPalindromeConvertedString(x: number): boolean {
    if(x<0) return false;
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


function isPalindromeUsingNumber(x: number): boolean {
       if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
  let original = x;
  let reversed = 0;
  
  while(x>0){
    const lastDigit = x%10;
    reversed = (reversed*10) + lastDigit;
    x = Math.floor(x/10)
  }
    return original === reversed;
};

function isPalindromeHalfReversal(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversedHalf = 0;
    while (x > reversedHalf) {
        const lastDigit = x % 10;
        reversedHalf = (reversedHalf * 10) + lastDigit;
        x = Math.floor(x / 10);
    }
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};