/*
    Task 3
    Create a function that sorts an array and removes all duplicate items from it.

    set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
    set([4, 4, 4, 4]) ➞ [4]
    set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
*/

function set(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(arr2.indexOf(arr[i]) === -1){
            arr2.push(arr[i])
        }
    }
    return arr2
}

console.log(set([1, 3, 3, 5, 5]))
console.log(set([4, 4, 4, 4]))
console.log(set([5, 7, 8, 9, 10, 15]))