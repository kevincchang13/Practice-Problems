// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

// This problem is similar to validParenthesis, but introduces four new characters. Open and closed brackets, and open and closed curly braces. All input strings will be nonempty, and will only consist of:

// - open parentheses '('
// - closed parentheses ')'
// - open brackets '['
// - closed brackets ']'
// - open curly braces '{'
// - closed curly braces '}'

// validBraces("()") // true
// validBraces("[]") // true
// validBraces("{}") // true
// validBraces("(){}[]") // true
// validBraces("([{}])") // true
// validBraces("({})[({})]") // true
// validBraces("(({{[[]]}}))") // true
// validBraces("{}({})[]") // true

// validBraces(")(}{][") // false
// validBraces("())({}}{()][][") // false
// validBraces("(((({{") // false
// validBraces("}}]]))}])") // false
// validBraces("(}") // false
// validBraces("[(])") // false

// BONUS - Solve this in O(n) Time



function validBraces(str) {
    const openBrace = new Set('{','[','(')
    const closeBrase = new Set('}',']',')')

    var count = 0
    var i = 0
    while (i < str.length) {
        if (count < 0) {
            return false
        } else {
            if (openBrace.has(str[i])) {
                count ++
            } else if (closeBrase.has(str[i])) {
                count --
            }
            i++
        }
    }

    if (count === 0) {
        return true
    } else {
        return false
    }
}
