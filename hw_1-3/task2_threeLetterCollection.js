/*
   Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.
    threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
    1st word: "eda"
    2nd word: "dab"
    3rd word: "abi"
    4th word: "bit"
    Remember to sort the array!
    
    threeLetterCollection("slap") ➞ ["lap", "sla"]
    threeLetterCollection("click") ➞ ["cli", "ick", "lic"]
    threeLetterCollection("cat") ➞ ["cat"]
    threeLetterCollection("hi") ➞ []
*/

function threeLetterCollection(str) {
    let arr2 = []
    if(str.length === 3){
        arr2.push(str)
        return arr2
    } else if(str.length < 3){
        return arr2
    } else {
        for(let i = 0; i <= str.length-3; i++){
            arr2.push(str[i]+str[i+1]+str[i+2])
        } 
        arr2 = arr2.sort()
        return  arr2
    }
}

console.log(threeLetterCollection("edabit") )
console.log(threeLetterCollection("slap") )
console.log(threeLetterCollection("click") )
console.log(threeLetterCollection("cat") )
console.log(threeLetterCollection("hi") )



