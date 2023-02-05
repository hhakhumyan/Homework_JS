/*
    Task 5
    Create a function that takes a boolean variable flag and returns it as a string.
    boolToString(true) ➞ "true"
    boolToString(false) ➞ "false"
*/

    function boolToString(bool){
        bool = String(bool)
        return bool
    }
    console.log(boolToString(true))
    console.log(boolToString(false))