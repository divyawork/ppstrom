document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Colors for players
    const playerColors = {
        'X': 'red',
        'O': 'blue'
    };

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }

    // Event listener for the reset button
    resetBtn.addEventListener('click', resetGame);

    // Function to handle cell clicks
    function handleCellClick(index) {
        if (!gameActive || gameBoard[index] !== '') {
            return;
        }

        gameBoard[index] = currentPlayer;
        renderBoard();
        checkWinner();

        // Switch to the other player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // Update status color based on the current player
        status.style.color = playerColors[currentPlayer];
    }

    // Function to render the game board
    function renderBoard() {
        gameBoard.forEach((value, index) => {
            const cell = board.children[index];
            cell.textContent = value;
        });
    }

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                status.textContent = `Player ${currentPlayer} wins!`;
                return;
            }
        }

        if (!gameBoard.includes('')) {
            gameActive = false;
            status.textContent = "It's a tie!";
        }
    }

    // Function to reset the game
    function resetGame() {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        status.textContent = '';
        status.style.color = ''; // Reset status color
        renderBoard();
    }
});
