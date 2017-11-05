// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1

// Bonus 1

// Solve this algorithm with the following constraints:

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus 2

// Solve this algorithm with the following constraints:

// Time Complexity - O(n * log(n))
// Space Complexity - O(1)

function countPairs(arr, n) {
    var arrSet = new Set(arr)
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        arrSet.remove(arr[i])
        if (arrSet.has(n-arr[i])) {
            count ++
        }
    }
    return count
}
