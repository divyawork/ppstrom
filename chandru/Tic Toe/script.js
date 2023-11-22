document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameStatus = document.getElementById('game-status');
    let gameOver = false;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent && !gameOver) {
                cell.textContent = currentPlayer;
                checkWinner();
                currentPlayer = 'O'; // Player's turn is over, now it's the computer's turn
                if (!gameOver) {
                    gameStatus.textContent = "Computer is thinking...";
                    setTimeout(computerMove, 1000);
                }
            }
        });
    });

    document.getElementById('reset-btn').addEventListener('click', resetGame);

    function checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                gameStatus.textContent = `Player ${currentPlayer} wins!`;
                gameOver = true;
                break;
            }
        }
        if (!gameOver && Array.from(cells).every(cell => cell.textContent !== '')) {
            gameStatus.textContent = "It's a tie!";
            gameOver = true;
        }
    }

    function computerMove() {
        if (!gameOver) {
            let emptyCells = Array.from(cells).filter(cell => !cell.textContent);
            if (emptyCells.length > 0) {
                let randomIndex = Math.floor(Math.random() * emptyCells.length);
                let computerCell = emptyCells[randomIndex];
                computerCell.textContent = 'O';
                currentPlayer = 'X'; // Computer's turn is over, now it's the player's turn
                gameStatus.textContent = 'Your turn!';
                checkWinner();
            }
        }
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        gameOver = false;
        gameStatus.textContent = 'Your turn!';
    }
});
