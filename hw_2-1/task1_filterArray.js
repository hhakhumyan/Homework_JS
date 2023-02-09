  /*
    Task 1
    Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

    filterArray([1, 2, "a", "b"]) ➞ [1, 2]
    filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
    filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
  */

    function filterArray(arr1){
      let arr2 = []
      for(let item of arr1){
        if(typeof item === 'number')
        arr2.push(item)
      }
      return arr2
    } 

    console.log(filterArray([1, 2, "a", "b"]))
    console.log(filterArray([1, "a", "b", 0, 15]))
    console.log(filterArray([1, 2, "aasf", "1", "123", 123]))

