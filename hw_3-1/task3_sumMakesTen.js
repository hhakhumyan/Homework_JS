/*
Create a function that takes two arguments. Both arguments are integers, a and b.
Return true if their sum is 10, and return false in other cases.

   Input                  Output
sumMakesTen(1, 9)        // true
sumMakesTen(2, 3)        // false
sumMakesTen(-12, 2)      // true
sumMakesTen(3, -1)       // false
*/


function sumMakesTen(a, b){
   return (a + b === 10 || a + b === -10 )
}

console.log(sumMakesTen(1, 9))
console.log(sumMakesTen(2, 3))
console.log(sumMakesTen(-12, 2))
console.log(sumMakesTen(3, -1))
