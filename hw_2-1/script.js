/*
    1. Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
    filterArray([1, 2, "a", "b"]) ➞ [1, 2]
    filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
    filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

    2. Create a function that returns an array of strings sorted by length in ascending order.
    sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
    sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
    sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
    sortByLength([]) ➞ []

    3. Create a function that sorts an array and removes all duplicate items from it.

    set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
    set([4, 4, 4, 4]) ➞ [4]
    set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

    4 Given a word, write a function that returns the first index and the last index of a character.

    charIndex("hello", "l") ➞ [2, 3]
    //  The first "l" has index 2, the last "l" has index 3.
    charIndex("circumlocution", "c") ➞ [0, 8]
    // The first "c" has index 0, the last "c" has index 8.
    charIndex("happy", "h") ➞ [0, 0]
    // Only one "h" exists, so the first and last index is 0.
    charIndex("happy", "e") ➞ undefined
    // "e" does not exist in "happy", so we return undefined.

    5. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

    spelling("bee") ➞ ["b", "be", "bee"]
    spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
    spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

    6. clone Array
    clone([1, 1]) ➞ [1, 1, [1, 1]]
    clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
    clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

    7. Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
    indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
    // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
    indexMultiplier([-3, 0, 8, -6]) ➞ -2
    // (-3*0 + 0*1 + 8*2 + -6*3)
*/