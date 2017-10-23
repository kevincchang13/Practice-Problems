// Implement a function called addUpTo which takes a number as an argument and adds up all the whole numbers from 1 up to and including the number passed in.

// Some edge cases to consider:

// If the argument passed in is not a number, the function should return NaN.
// If the argument passed in is less than 1, the function should return 0.
// If the argument passed in is not a whole number, the function should add up all the whole numbers between 1 and the largest whole number less than the argument passed in.

// Examples:

// addUpTo(5); // 15, since 1 + 2 + 3 + 4 + 5 = 15
// addUpTo(10); // 55
// addUpTo("three"); // NaN
// addUpTo(null); // NaN
// addUpTo(0); // 0
// addUpTo(-100); // 0
// addUpTo(3.4); // 6
// addUpTo(5.9999999); // 15

function addUpTo(num) {
    if (typeof(num) !== 'number') {
        return NaN
    }
    if (num < 1) {return 0}
    return (Math.floor(num)*(Math.floor(num)+1))/2
}




// Write a function called twoArrayObject which accepts to arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c']  , [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z']  , [1,2]) // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(arr1, arr2) {
    var result = {}
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i]){
            result[arr1[i]] = arr2[i]
        } else {
            result[arr1[i]] = null
        }
    }
    return result
}


// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// validParentheses("()") // true 
// validParentheses(")(()))") // false 
// validParentheses("(") // false 
// validParentheses("(())((()())())") // true 
// validParentheses('))((') // false
// validParentheses('())(') // false
// validParentheses('()()()()())()(') // false

