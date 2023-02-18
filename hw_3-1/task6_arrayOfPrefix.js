/*
    You are given an array of strings words and a string pref. Return the number of strings in
    words that start with the defined prefix.

    Note:
    A prefix of a string s is any leading contiguous substring of s.

                Input                      Output
    ["attention","please","attend"]  "at"   // 2
    ["live","love","lie"]            "l"    // 3
    ["solve","me","please"]          "no"   // 0
*/

function arrayOfPrefix(words, pref){
    let count = 0
    for(let i = 0; i < words.length; i++){
        (words[i].includes(pref)) ? count += 1 : count
    }
    return count
}

console.log(arrayOfPrefix(["attention","please","attend"], "at"))
console.log(arrayOfPrefix(["live","love","lie"], "l"))
console.log(arrayOfPrefix(["solve","me","please"], "no"))