/*
    Task 3
    Create a function that takes length and width and finds the perimeter of a rectangle.
    findPerimeter(6, 7) ➞ 26
    findPerimeter(20, 10) ➞ 60
    findPerimeter(2, 9) ➞ 22
*/

    function findPerimetr(length, width){
        let result = 2 * (length + width)
        return result
    }

    console.log(findPerimetr(6, 7))
    console.log(findPerimetr(20, 10))
    console.log(findPerimetr(2, 9))