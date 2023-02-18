/*
    Task 2
    Given an array of integers. Write a program to find the minimum and maximum elements in
    the array and swap them.

       Input               Output
    [11,23,4,5,1]    // [11,1,4,5,23]
    [0,2,4,6,8,10]   // [10,2,4,6,8,0]
    [3]        	     // [3]
*/

{
    function findMinAndMaxElAndSwap(inpArrInt){
        let arrCopy = [...inpArrInt]
        let minEl = (Math.min(...inpArrInt))
        let maxEl = (Math.max(...inpArrInt))
        let indMinEl = inpArrInt.indexOf(minEl)
        let indMaxEl = inpArrInt.indexOf(maxEl)
        result = arrCopy.splice(indMinEl, 1, maxEl)
        result = arrCopy.splice(indMaxEl, 1, minEl)    
        return arrCopy
    }
    
    console.log(findMinAndMaxElAndSwap([11,23,4,5,1]))  // [11,1,4,5,23]
    console.log(findMinAndMaxElAndSwap([0,2,4,6,8,10])) // [10,2,4,6,8,0]
    console.log(findMinAndMaxElAndSwap([3]))            // [3]
}

// Նույնը օպտիմիզացված․

{
    function findMinAndMaxElAndSwap(inpArrInt){
        let arrCopy = [...inpArrInt]
        result = arrCopy.splice(inpArrInt.indexOf(Math.min(...inpArrInt)), 1, Math.max(...inpArrInt))
        result = arrCopy.splice(inpArrInt.indexOf(Math.max(...inpArrInt)), 1, Math.min(...inpArrInt))    
        return arrCopy
    }
    
    console.log(findMinAndMaxElAndSwap([11,23,4,5,1]))  // [11,1,4,5,23]
    console.log(findMinAndMaxElAndSwap([0,2,4,6,8,10])) // [10,2,4,6,8,0]
    console.log(findMinAndMaxElAndSwap([3]))            // [3]
}


