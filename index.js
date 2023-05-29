function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;
  while (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

  // Write your algorithm here
// 1.Initialize a variable start to 0.
// 2.Initialize a variable end to the length of word minus 1.
// 3.While start is less than or equal to end, do the following:
//  a. If the character at index start in word is not equal to the character at index end, return false.
//  b. Increment start by 1.
//  c. Decrement end by 1.
// 4.If the loop completes without returning false, return true.
/*
  Add your pseudocode here
// *describe isPalindrome(word):
// Init value is equal to Zero
// Final value is equal to length of word minus one
// while Init less than equal to Final:
//     it word[Init] is not equal to word[Final]:
//         expects false
//     increment start by 1
//     decrement Final by 1
// expects true
/*
  Add written explanation of your solution here
// 1 This pseudocode represents the logic of the isPalindrome function.
// 2 It initializes the start and end indices at the beginning and end of the word, respectively.
// 3 Then it enters a loop that iterates as long as start is less than or equal to end. Within the loop, it compares the characters at the start and end indices.
// 4 If they are not equal, it immediately returns false, indicating that the word is not a palindrome.
// 5If the loop completes without finding any mismatch, it returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //  custom test
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  // Custom test 2
  console.log("Expecting: false");
  console.log("=>", isPalindrome("apple"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
