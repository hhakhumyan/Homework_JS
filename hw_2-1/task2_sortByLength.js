/*
    Task 2 
    Create a function that returns an array of strings sorted by length in ascending order.

    sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
    sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
    sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
    sortByLength([]) ➞ []
*/

function sortByLength(arr1){

    let arr2 = []
    let obj = {}
    let len = 0

    for(let item of arr1){        
        let n = item.length
        obj[n] = item
    }

    for(let property in obj){
        arr2.push(obj[property])
    }

    return arr2
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]))
console.log(sortByLength(["apple", "pie", "shortcake"]))
console.log(sortByLength(["may", "april", "september", "august"]))
console.log(sortByLength([]))




