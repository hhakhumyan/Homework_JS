/*
    1. Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
    missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
    missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
    missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

    2. Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.
    threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
    // 1st word: "eda"
    // 2nd word: "dab"
    // 3rd word: "abi"
    // 4th word: "bit"
    // Remember to sort the array!

    threeLetterCollection("slap") ➞ ["lap", "sla"]
    threeLetterCollection("click") ➞ ["cli", "ick", "lic"]
    threeLetterCollection("cat") ➞ ["cat"]
    threeLetterCollection("hi") ➞ []

    3. Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
    getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
    getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
    getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
    getFrequencies([]) ➞ {}

    4. countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
    }) ➞ { moron: 2, scumbag: 1, idiot: 2 }


    countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c:"moron"
    }) ➞ { moron: 3 }

    5. Create a function which takes in an encoded string and returns an object according to the following example:
    parseCode("John000Doe000123") ➞ {
    firstName: "John",
    lastName: "Doe",
    id: "123"
    }

    parseCode("michael0smith004331") ➞ {
    firstName: "michael",
    lastName: "smith",
    id: "4331"
    }

    6. getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

    7. Write a function that counts how many concentric layers a rug has.
    countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
    ]) ➞ 2

    countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
    ]) ➞ 3

    8. Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
    findOccurrences("Hello World", "o") ➞ {
    "hello" : 1,
    "world" : 1
    }

    findOccurrences("Create a nice JUICY function", "c") ➞  {
    "create" : 1,
    "a" : 0,
    "nice" : 1,
    "juicy" : 1,
    "function" : 1
    }
*/