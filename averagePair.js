// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Your solution MUST have the following complexities:

// Time: O(N)
// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, n) {
    var lookFor = n*2
    let i = 0
    let j = arr.length-1
    while (i < j) {
        if (arr[i] + arr[j] === lookFor) {
            return true
        } else if (arr[i]+arr[j] < lookFor) {
            i++
        } else if (arr[i]+arr[j] > lookFor) {
            j--
        }
    }
    return false
}
