/*-------------------------------- Constants --------------------------------*/

let playerIs = {
    '1': 'O',
    '-1': 'X',
    'null': ''
}

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here

// find the class .board within the document
const squares = document.querySelectorAll('.board div')
// find the message id using getelementbyid 
const messages = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click

// apply eventlistener on reset button when click. First find the id using getelementbyid
document.getElementById('resetBtn').addEventListener('click', init)
// apply eventlistener on .BOARD so user can click to interact
document.querySelector('.board').addEventListener('click', sqHandle)

/*-------------------------------- Functions --------------------------------*/

// Some functions you might choose to use:
init()

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function sqHandle(e) {
    const index = parseInt(e.target.id.replace('sq', ''))
    if (board[index] || winner) 
        return
        board[index] = turn
        turn *= -1
        winner = winnerIs()
        render()
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function winnerIs() {
    for (let i = 0; i < winningCombo.length; i++) {
        if (Math.abs(board[winningCombo[i][0]] + board[winningCombo[i][1]] + board[winningCombo[i][2]]) === 3)
        return board[winningCombo[i][0]]
    }
    if (board.includes(null)) return null
    return 'T'
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {
    board.forEach((sq, idx) => {
        squares[idx].innerText = playerIs[sq]
    })
    if (winner === 'T') {
        message.innerHTML = 'Tie, Try Again!';
    } else if (winner) {
        message.innerHTML = `Congrats Player ${playerIs[winner].toUpperCase()}!`;
    } else {
        message.innerHTML = `Player ${playerIs[turn].toUpperCase()}'s Turn!`;
    }
}