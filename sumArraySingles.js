// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.


function sumArraySingles(a) {
    var aObj = {}
    for (let i = 0; i < a.length; i++) {
        aObj[a[i]] =  ++ aObj[a[i]] || 1
    }
    var result = 0
    for (var key in aObj) {
        if (aObj[key] === 1) {
            result += +key
        }
    }
    return result
}
