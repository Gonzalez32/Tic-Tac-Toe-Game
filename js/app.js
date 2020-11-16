/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let board
let turn = 'X'
let win

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('grid').addEventListener('click', switchOver)
document.getElementById('resetBtn').addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is






























// document.addEventListener('DOMContentLoaded', () => {
//     const grids = document.querySelectorAll('.grid div')

//     grids.forEach(grid => {
//         grid.addEventListener('click', result)
//     })

//     function result(e) {
//         const gridArray = Array.from(grids)
//         const index = gridArray.indexOf(e.target)

//     }
// })