/*
    6. clone Array

    clone([1, 1]) ➞ [1, 1, [1, 1]]
    clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
    clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
*/

function clone(arr){
    let arr2 = []
    for(let num of arr){
        arr2.push(num)
    }
    let arr3 = [...arr2]
    arr2.push(arr3)
    return arr2
}

console.log(clone([1, 1]))
console.log(clone([1, 2, 3]))
console.log(clone(["x", "y"]))
