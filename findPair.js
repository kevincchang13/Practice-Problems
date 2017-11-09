// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true

//O(n^2)
function findPair(a,n) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (Math.abs(a[i] - a[j] === n)) {
                return true
            }
        }
    }
    return false
}


// Bonus 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)


function findPair(a,n) {
    var aSet = new Set(a)
    var aObj = {}
    for (let i = 0; i < a.length; i++) {
        aObj[a[i]] = Math.abs(a[i]-n)
    }
    for (var key in aObj) {
        if (aSet.has(aObj[key])) {
            return true
        }
    }
    return false
}


// Bonus 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)


// Bonus 3 - implement both bonuses in Python!
