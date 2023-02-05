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