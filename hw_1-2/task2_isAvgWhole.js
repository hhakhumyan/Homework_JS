/*
    Task 2
    Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
    
    isAvgWhole([1, 3]) ➞ true
    isAvgWhole([1, 2, 3, 4]) ➞ false
    isAvgWhole([1, 5, 6]) ➞ true
    isAvgWhole([1, 1, 1]) ➞ true
    isAvgWhole([9, 2, 2, 5]) ➞ false
*/

{
    function isAvgWhole(arr){
        let count = 0
        let sumNumber = 0
        for(let i of arr){
            count = count + 1
            sumNumber = sumNumber + i
        } 
        let result = ((sumNumber / count ) % 2 === 0)
        return result
    }
    
    console.log(isAvgWhole([1, 3]))
    console.log(isAvgWhole([1, 2, 3, 4]))
    console.log(isAvgWhole([1, 5, 6]))
    console.log(isAvgWhole([1, 1, 1]))
    console.log(isAvgWhole([9, 2, 2, 5]))
}
{
    function isAvgWhole(arr){
        let count = 0
        let sumNumber = 0
        arr.forEach(function (item){
            count = count + 1
            sumNumber = sumNumber + item
        })
        let result = ((sumNumber / count ) % 2 === 0)
        return result
    }
    
    console.log(isAvgWhole([1, 3]))
    console.log(isAvgWhole([1, 2, 3, 4]))
    console.log(isAvgWhole([1, 5, 6]))
    console.log(isAvgWhole([1, 1, 1]))
    console.log(isAvgWhole([9, 2, 2, 5]))
}

