/*
    Task 8
    *(optional). Create a function to return the amount of potatoes there are in a string.
    potatoes("potato") ➞ 1
    potatoes("potatopotato") ➞ 2
*/

    function potatoes(word){
        let conc = ''
        let count = 0
        for(let i = 0; i < word.length; i++){
            conc = conc + word[i]
            if(conc == 'potato'){
                count = count + 1
                conc = ''
            }
        }
        return count
    }

    console.log(potatoes("potato"))
    console.log(potatoes("potatopotato"))