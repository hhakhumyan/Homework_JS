/*
    Task 5 
    Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

    spelling("bee") ➞ ["b", "be", "bee"]
    spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
    spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
*/

function spelling(word){
    let arr =[]
    let conc = ''
    for(let i = 0; i < word.length; i++){
        conc = conc + word[i]
        arr.push(conc)
    }
    return arr
}

console.log(spelling("bee"))
console.log(spelling("happy"))
console.log(spelling("eagerly"))
