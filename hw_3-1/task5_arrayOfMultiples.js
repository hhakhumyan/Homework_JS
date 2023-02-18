/*
Task 5
Create a function that takes two numbers as arguments (num, length) and returns
an array of multiples of num until the array length reaches length. If the first
parameter is equal to 0 return [0].

        Input               Output
arrayOfMultiples(7, 3)  // [7, 14, 21]
arrayOfMultiples(2, 5)  // [2, 4, 6, 8, 10]
arrayOfMultiples(0, 2)  // [0]
arrayOfMultiples(3, 1)  // [3]
*/

function arrayOfMultiples(num, length){
    let result = []
    let elSum = 0
    if(num === 0) {result.push(0)} else{
        for (let i = 0; i < length; i++){
            elSum += num
            result.push(elSum)
        }
    }    
 return result
}

console.log(arrayOfMultiples(7, 3))
console.log(arrayOfMultiples(2, 5))
console.log(arrayOfMultiples(0, 2))
console.log(arrayOfMultiples(3, 1))
