/*
    Task 4
    Given a word, write a function that returns the first index and the last index of a character.

    charIndex("hello", "l") ➞ [2, 3]
    The first "l" has index 2, the last "l" has index 3.
    charIndex("circumlocution", "c") ➞ [0, 8]
    The first "c" has index 0, the last "c" has index 8.
    charIndex("happy", "h") ➞ [0, 0]
    Only one "h" exists, so the first and last index is 0.
    charIndex("happy", "e") ➞ undefined
    "e" does not exist in "happy", so we return undefined.
*/

function charIndex(word, letter){
    let arr = []
    if(word.indexOf(letter) !== -1){
        arr.push(word.indexOf(letter))
        arr.push(word.lastIndexOf(letter))
        return arr
    }
    
}

console.log(charIndex("hello", "l"))           // [2, 3]
console.log(charIndex("circumlocution", "c"))  // [0, 8]
console.log(charIndex("happy", "h"))           // [0, 0]
console.log(charIndex("happy", "e"))           // undefined

