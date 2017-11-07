// 1. Implement a function called

// areThereDuplicates

// which checks whether there are any duplicates among the arguments passed in. The function should either run in O(n) time and O(n) space or O(n log n) time and O(1) space.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true


function areThereDuplicates(...args) {
    var counter = {}
    for (let i = 0; i < args.length; i++) {
        counter[args[i]] = ++counter[args[i]] || 1
    }
    const count = Object.values(counter)
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 1) {
            return true
        }
    }
    return false
}


function areThereDuplicates(...args) {
    var argsObj = {...args}
    var sortedArgs = Object.values(argsObj).sort()
    for (let i = 0; i < sortedArgs.length; i++) {
        if (sortedArgs[i] === sortedArgs[i+1]) {
            return true
        }
    }
    return false
}



// 2. Add commas.

// This function takes in a number and formats that number so that it has commas after every third digit to the left of the decimal point. You can assume that all numbers are non-negative.
// Examples:

// addCommas(1) // "1"
// addCommas(1000) // "1,000"
// addCommas(123456789) // "123,456,789"
// addCommas(3.141592) // "3.141592"
// addCommas(54321.99) // "54,321.99"
