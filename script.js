// script.js
let currentPlayer = 'X'; // Player X starts
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty game board
let isGameOver = false;

const cells = document.querySelectorAll('.cell');

function handleCellClick(index) {
    if (gameBoard[index] !== '' || isGameOver) return;

    // Update game board and display the current player's marker
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    // Check if there's a winner
    if (checkWinner()) {
        setTimeout(() => {
            alert(`${currentPlayer} wins!`);
        }, 100);
        isGameOver = true;
    } else if (gameBoard.every(cell => cell !== '')) {
        // Check for a draw
        setTimeout(() => {
            alert('It\'s a draw!');
        }, 100);
        isGameOver = true;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
        [0, 4, 8], [2, 4, 6]              // Diagonal
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

// Add event listeners to each cell
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});
