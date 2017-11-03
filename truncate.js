// Implement the following function:

// 1. Truncate.

// Given a string and a number n, truncate the string to a shorter string containing at most n characters. If the string gets truncated, the truncated return string should have a "..." at the end.  Because of this, the smallest number passed in as a second argument should be 3.

// Examples:

// truncate("Hello World", 6) // "Hel..."
// truncate("Problem solving is the best!", 10) // "Problem..."
// truncate("Yo", 100) // "Yo"
// truncate("Super cool", 3) // "..."
// truncate("Super cool", 2) // "Truncation must be at least 3 characters."

// Implement this function in two ways: iteratively and recursively.


function truncate(str, n) {
    if (n < 3) return "Truncation must be at least 3 characters."
    if (str.length < n) return str

    return str.slice(0,n-3).concat("...")

}
