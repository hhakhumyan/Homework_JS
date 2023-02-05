/*
    Task 6
    Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
    lessThanOrEqualToZero(5) ➞ false
    lessThanOrEqualToZero(0) ➞ true
*/
{
    function lessThanOrEqualToZero(number){
        if(number <= 0){
            return true
        } else {
            return false
        }
    }
    console.log(lessThanOrEqualToZero(5))
    console.log(lessThanOrEqualToZero(0))
}
{
    function lessThanOrEqualToZero(number){      
        return number <= 0
    }
    console.log(lessThanOrEqualToZero(5))
    console.log(lessThanOrEqualToZero(0))
}