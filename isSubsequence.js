// Implement a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false - order matters!

function isSubsequence(s1,s2) {
    var i = 0
    var j = 0
    while (j < s2.length) {
        if (s1[i] === s2[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    if (i === s1.length) {
        return true
    } else {
        return false
    }
}

// BONUS:

// Solve this problem in O(1) space complexity, and O(n + m) time complexity, where n is the length of the first string and m is the length of the second string.
