/*
    Task 4
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
    
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
    minMax([2334454, 5]) ➞ [5, 2334454]
    minMax([1]) ➞ [1, 1]
*/

function minMax(arr1){
    let min = arr1[0]
    let max = arr1[0]
    for(let i = 0; i <= arr1.length; i++){
        if(arr1[i] < min){
            min = arr1[i]
        }
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    let arr2 = [min, max]
    return arr2
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))


