/*
    Task 4
    Create a function which returns the length of a string, WITHOUT using String.length property.
    length("Hello World") ➞ 11
    length("wash your hands!") ➞ 16
*/

{
    function length(words){
        let count = 0
        for(let i of Array.from(words)){
            count = count + 1
        }
        return count
    }

    console.log(length("Hello World"))
    console.log(length("wash your hands!"))
}
{
    
}