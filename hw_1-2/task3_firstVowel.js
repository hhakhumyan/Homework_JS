/*
    Task 3
    Create a function that returns the index of the first vowel in a string.
    
    firstVowel("apple") ➞ 0
    firstVowel("hello") ➞ 1
    firstVowel("STRAWBERRY") ➞ 3
    firstVowel("pInEaPPLe") ➞ 1
*/

function firstVowel(arr){
    let vowel = ['A', 'E', 'I', 'O', 'U', 'Y', 'a', 'e', 'i', 'o', 'u', 'y']
    for(let i = 0; i < arr.length; i++){
        for(a = 0; a < vowel.length; a++){
            if(arr[i] === vowel[a]){
                return i
            }
        }
    }
}

console.log(firstVowel("apple"))
console.log(firstVowel("hello"))
console.log(firstVowel("STRAWBERRY"))
console.log(firstVowel("pInEaPPLe"))
