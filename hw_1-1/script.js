{
    /*
    Task 1
    Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
    charCount("a", "edabit") ➞ 1
    charCount("c", "chamber of secrets") ➞ 2
    charCount("b", "big fat bubble") ➞ 4
    */

function charCount(letter, word){
    let n = 0
    k = word.split(' ').join('')
    for(i = 0; i < k.length; i++){
      if(letter === k[i]){
        n = n + 1
      }  
    }
    return n
  }
  
  console.log(charCount("a", "edabit"))
  console.log(charCount("c", "chamber of secrets"))
  console.log(charCount("b", "big fat bubble"))
}

{
    /*
    Task 2 
    Create a function that takes a number as an argument and returns the highest digit in that number.
    highestDigit(379) ➞ 9
    highestDigit(2) ➞ 2
    highestDigit(377401) ➞ 7
    */

    function highestDigit(number){
        number = String(number)
        let max = number[0]
        for(let i = 1; i < number.length; i++){
            if(number[i] >= max){
                max = number[i]
            }
        }
        return max
    }

    console.log(highestDigit(379))
    console.log(highestDigit(2))
    console.log(highestDigit(377401))
}

{
    /*
    Task 3
    Create a function that takes length and width and finds the perimeter of a rectangle.
    findPerimeter(6, 7) ➞ 26
    findPerimeter(20, 10) ➞ 60
    findPerimeter(2, 9) ➞ 22
    */

    function findPerimetr(length, width){
        let result = 2 * (length + width)
        return result
    }

    console.log(findPerimetr(6, 7))
    console.log(findPerimetr(20, 10))
    console.log(findPerimetr(2, 9))
}

{
    /*
    Task 4
    Create a function which returns the length of a string, WITHOUT using String.length property.
    length("Hello World") ➞ 11
    length("wash your hands!") ➞ 16
    */
    function length(words){
        let count = 0
        for(let i of Array.from(words)){
            count = count + 1
        }
        return count
    }

    console.log(length("Hello World"))
    console.log(length("wash your hands!"))
}

{
    /*
    Task 5
    Create a function that takes a boolean variable flag and returns it as a string.
    boolToString(true) ➞ "true"
    boolToString(false) ➞ "false"
    */
    function boolToString(bool){
        bool = String(bool)
        return bool
    }
    console.log(boolToString(true))
    console.log(boolToString(false))
}

{
    /*
    Task 6
    Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
    lessThanOrEqualToZero(5) ➞ false
    lessThanOrEqualToZero(0) ➞ true
    */
    function lessThanOrEqualToZero(number){
        if(number <= 0){
            return true
        } else {
            return false
        }
    }
    console.log(lessThanOrEqualToZero(5))
    console.log(lessThanOrEqualToZero(0))
}


{
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
}

{
    /*
    Task 8
    *(optional). Create a function to return the amount of potatoes there are in a string.
    potatoes("potato") ➞ 1
    potatoes("potatopotato") ➞ 2
    */

    function potatoes(word){
        let conc = ''
        let count = 0
        for(let i = 0; i < word.length; i++){
            conc = conc + word[i]
            if(conc == 'potato'){
                count = count + 1
                conc = ''
            }
        }
        return count
    }

    console.log(potatoes("potato"))
    console.log(potatoes("potatopotato"))
}
