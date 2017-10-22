// Part I

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4); // 3
// fib(10); // 55
// fib(28); // 317811
// fib(35); // 9227465


function fib(num, prev=1, current=1, i=2) {
    if (i === num) {return current}

    return fib(num, current, prev+current, i++)
}





// Part II

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome("amanaplanacanalpanama"); // true
// isPalindrome("amanaplanacanalpandemonium"); // false

//doesnt account for spaces
function isPalindrome(str, start=0, end=str.length-1) {
    if (start >= end) {return true}

    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
        return false
    } else {
        return isPalindrome(str,start+1,end-1)
    }
}

//accounts for spaces
function isPalindrome(str, start=0, end=str.length-1) {
    if (start >= end) {return true}

    if (str[start] === " ") {
        start++
    }
    if (str[end] === " ") {
        end--
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
        return false
    } else {
        return isPalindrome(str,start+1,end-1)
    }
}




// Part III

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


function someRecursive(arr, fn, i=0) {
    if (i === arr.length) {return false}
    if (fn(arr[i])) {
        return true
    } else {
        return someRecursive(arr,fn, i+1)
    }
}





// Part IV

// Write a  recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//recurse
function reverse(str, newStr="", end=str.length-1) {
    if (end < 0) {return newStr}
    return reverse(str,newStr.concat(str[end]), end-1)
}

//iteration
function reverse(str) {
    var arr = str.split("")
    var i = 0
    var j = arr.length-1
    while(i<j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr.join("")
}

// Part V

// Write a recursive function called collectOddValues which accepts an array of numbers and returns a new array of only the odd values.

// collectOddValues([1,2,3,4,5,6,7]) // [1,3,5,7]
// collectOddValues([-2,1,-11,3,9,16,17]) // [-1,-11,3,9,17]



function collectOddValues(arr,odds=[]) {
    if (arr.length === 0) {return odds}
    var val = arr.pop()
    if (Math.abs(val%2) === 1) {
        odds.push(val)
    }
    return collectOddValues(arr,odds)
}




// Part VI

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//doesnt work
// function flatten(arr, result=[]) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             return flatten(arr[i], result)
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }


// Part VII

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


function capitalizeWords (arr, result=[], i=0) {
    if (i > arr.length-1) {return result}

    var upper = arr[i].toUpperCase()
    result.push(upper)
    return capitalizeWords(arr,result,i+1)
    
}

// Part VIII

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


function capitalizeFirst(arr, result=[], i=0) {
    if (i > arr.length-1) {return result}

    var upper = arr[i][0].toUpperCase().concat(arr[i].slice(1))
    result.push(upper)
    return capitalizeFirst(arr,result,i+1)
}


// Part IX

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10


