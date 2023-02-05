/*
    Task 1
    Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
    charCount("a", "edabit") ➞ 1
    charCount("c", "chamber of secrets") ➞ 2
    charCount("b", "big fat bubble") ➞ 4
*/


{
    function charCount(letter, word){
        let n = 0
        k = word.split(' ').join('')
        for(i = 0; i < k.length; i++){
          if(letter === k[i]){
            n = n + 1
          }  
        }
        return n
          }
            
      console.log(charCount("a", "edabit"))
      console.log(charCount("c", "chamber of secrets"))
      console.log(charCount("b", "big fat bubble"))
}

{
    function charCount(letter, word){
        let n = 0
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
            n = n + 1 
            // console.log(word[i])
            }                        
        }
        return n
    }
    charCount("e", "edabit")  
      console.log(charCount("e", "edabit"))
      console.log(charCount("c", "chamber of secrets"))
      console.log(charCount("b", "big fat bubble"))
}
