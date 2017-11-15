// Binary Search:
// return -1 if the number is not in the array

// Tests:
// binarySearch([1,3,5,7,9,23,67,98,139,394], 67) //6
// binarySearch([1,3,5,7,9,23,67,98,139,394], 83) //-1

// Iterative:

function binarySearch(arr,n) {
    var start = 0
    var end = arr.length-1
    while (start < end) {
        var mid = end-start/2
        if (arr[mid] === n) {
            return mid
        } else if (arr[mid] > n) {
            end = mid-1
        } else if (arr[mid] < n) {
            start = mid+1
        }
    }
    return -1
}

// Recursive:

function binarySearch(arr,n, start=0, end=arr.length-1) {
    var mid = end-start/2
    while(start < end) {
        if (arr[mid] === n) {
            return mid
        } else if (arr[mid] > n) {
            return binarySearch(arr,n,start,end=mid-1)
        } else if (arr[mid] < n) {
           return binarySearch(arr,n,mid+1,end)
        }
    }
    return -1
}
