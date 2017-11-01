// Please implement the following functions:

// 1. Hamming Distance (https://en.wikipedia.org/wiki/Hamming_distance).

// This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.

// If the inputs do not have the same length, the function should return "Input strings must have the same length."

// Examples:

// hammingDistance("hello", "jello") // 1
// hammingDistance("cool", "kewl") // 3
// hammingDistance("sweet", "Sweet") // 0
// hammingDistance("yoyo", "yoyoyo") // "Input strings must have the same length."


function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        return 'Input strings must have the same length'
    }

    var count = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
            count++
        }
    }
    return count
}


// 2. Implement a function called

// oneCharDifference

// which checks whether there two strings differ by a single character.

// The difference may consist of one character being added, removed, or replaced, in which case the function must return true. In all other cases it must return false. As with hammingDistance, this function should ignore case.

// Examples:

// oneCharDifference("grate", "grape") // true
// oneCharDifference("male", "maple") // true
// oneCharDifference("help", "helping") // false
// oneCharDifference("boom", "boo") // true
// oneCharDifference("same", "same") // false


function oneCharDifference(str1, str2) {

}
