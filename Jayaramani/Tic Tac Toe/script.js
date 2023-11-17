document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('reset-btn');
    const playerScoreElement = document.getElementById('player-score');
    const aiScoreElement = document.getElementById('ai-score');

    let currentPlayer = 'X';
    let playerScore = 0;
    let aiScore = 0;
    let gameOver = false;

    // Create the Tic Tac Toe board
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
    }

    resetButton.addEventListener('click', resetGame);

    function handleCellClick(event) {
        if (gameOver) return;

        const cell = event.target;
        const row = cell.dataset.row;
        const col = cell.dataset.col;

        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                result.textContent = `Player ${currentPlayer} wins!`;
                updateScore('player');
                gameOver = true;
            } else if (isBoardFull()) {
                result.textContent = 'It\'s a draw!';
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (!gameOver && currentPlayer === 'O') {
                    // AI's turn
                    makeAIMove();
                }
            }
        }
    }

    function makeAIMove() {
        const bestMove = getBestMove();
        const aiMove = document.querySelector(`.cell[data-row="${bestMove.row}"][data-col="${bestMove.col}"]`);
        aiMove.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (checkWinner()) {
            result.textContent = 'AI wins!';
            updateScore('ai');
            gameOver = true;
        } else if (isBoardFull()) {
            result.textContent = 'It\'s a draw!';
            gameOver = true;
        }
    }

    function getBestMove() {
        let bestScore = -Infinity;
        let bestMove;

        const cells = document.querySelectorAll('.cell');

        for (const cell of cells) {
            if (cell.textContent === '') {
                cell.textContent = 'O';
                const score = minimax(cells, 0, false);
                cell.textContent = '';

                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {
                        row: cell.dataset.row,
                        col: cell.dataset.col
                    };
                }
            }
        }

        return bestMove;
    }

    function minimax(cells, depth, isMaximizing) {
        if (checkWinner()) {
            return isMaximizing ? -1 : 1;
        } else if (isBoardFull()) {
            return 0;
        }

        const currentPlayer = isMaximizing ? 'O' : 'X';
        let bestScore = isMaximizing ? -Infinity : Infinity;

        for (const cell of cells) {
            if (cell.textContent === '') {
                cell.textContent = currentPlayer;
                const score = minimax(cells, depth + 1, !isMaximizing);
                cell.textContent = '';

                bestScore = isMaximizing ? Math.max(bestScore, score) : Math.min(bestScore, score);
            }
        }

        return bestScore;
    }

    function checkWinner() {
        const cells = document.querySelectorAll('.cell');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return true;
            }
        }

        return false;
    }

    function isBoardFull() {
        const cells = document.querySelectorAll('.cell');
        return Array.from(cells).every(cell => cell.textContent !== '');
    }

    function resetGame() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
        });
        result.textContent = '';
        currentPlayer = 'X';
        gameOver = false;
    }

    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            playerScoreElement.textContent = playerScore;
        } else if (winner === 'ai') {
            aiScore++;
            aiScoreElement.textContent = aiScore;
        }
    }
});
