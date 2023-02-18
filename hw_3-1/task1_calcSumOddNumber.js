/*
    Task 1
    Given an array of integers. Write a program which calculates the sum of odd numbers.
    If there are no odd numbers in the array the answer is 0.

    Input         Output
    [1,2,3,4,5]      // 9
    [0,2,4,6,8,10]   // 0
    [22,1,3]         // 4
*/

function calcSumOddNumber(arrNum){
    let SumOddNumber = 0
    for(let item of arrNum){
        if(item % 2 !== 0){
            SumOddNumber += item
        } 
    }
    return SumOddNumber
}

console.log(calcSumOddNumber([1,2,3,4,5]))
console.log(calcSumOddNumber([0,2,4,6,8,10]))
console.log(calcSumOddNumber([22,1,3]))