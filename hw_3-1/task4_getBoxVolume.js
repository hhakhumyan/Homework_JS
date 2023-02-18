/*
    Task 4
    Create a function that takes an argument sizes of the box (width, length, height) and
    returns the volume of the box.

         Input           Output
    getBoxVolume(1,2,13)  // 26
    getBoxVolume(2,2,2)   // 8
    getBoxVolume(11,1,2)  // 22
*/

function getBoxVolume(a, b, c){
 return (a * b * c)
}

console.log(getBoxVolume(1,2,13))
console.log(getBoxVolume(2,2,2))
console.log(getBoxVolume(11,1,2))
