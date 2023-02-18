/*
    Task 7
    Create a function which takes two strings (p1 and p2  — which represent player 1 and 2) as
    arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
    Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the
    winner according to the following rules:

        Note:
        ● Rock beats Scissors
        ● Scissors beats Paper
        ● Paper beats Rock

    If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The
    winner is p2" and if p1 and p2 are the same, return "It's a draw".

            Input                      Output
    rps("Rock", "Paper")        // "The winner is p2"
    rps("Scissors", "Paper")    // "The winner is p1"
    rps("Paper", "Paper")       // "It's a draw"
    */

    function rps(p1, p2){  
        return (p1 === p2) ? "It's a draw" : (((p1 === 'Rock' && p2 === 'Scissors') || (p1 === 'Paper' && p2 === 'Rock') || (p1 === 'Scissors' && p2 === 'Paper')) ? "The winner is p1" : "The winner is p2")
    }

    console.log(rps("Rock", "Paper"))
    console.log(rps("Scissors", "Paper"))
    console.log(rps("Paper", "Paper"))
