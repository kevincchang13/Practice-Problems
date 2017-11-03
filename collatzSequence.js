// Implement the following functions:

// Collatz sequence.

// Given a positive whole number n, this function should produce an array given by the following rules:

// 1. The first element in the array should be n.

// 2. After the first element, each subsequent element should be equal to:
//   - Half the previous element, if the previous element is even,
//   - Three times the previous element plus one, if the previous element is odd.
// Note that in either case, the result should be an integer.

// 3. The last element in the array should be 1. When you encounter your first 1, you should push it to the array and return the array.

// Examples:

// collatzSequence(4); // [4, 2, 1]
// collatzSequence(6); // [6, 3, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(7); // [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// collatzSequence(0); // "Input must be a positive whole number."
// collatzSequence([]); // "Input must be a positive whole number."
