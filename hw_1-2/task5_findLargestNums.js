/*
    5. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
    findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
    findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
*/

function findLargestNums(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        let max = arr[i][0]
        for(let a = 0; a < arr[i].length; a++){
            if(max < arr[i][a]){
                max = arr[i][a]                
            }            
        }
        arr2.push(max)
    }
    return arr2
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))
