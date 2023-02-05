/*
    Task 7
    Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
    isPlural("changes") ➞ true
    isPlural("change") ➞ false
    isPlural("dudes") ➞ true
    isPlural("magic") ➞ false
*/

    function isPlural(word){
        return word[word.length-1] === 's'
    }

    console.log(isPlural("changes"))
    console.log(isPlural("change"))
    console.log(isPlural("dudes"))
    console.log(isPlural("magic"))