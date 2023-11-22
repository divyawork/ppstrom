document.addEventListener('DOMContentLoaded', () => {
    const playerTypeSelect = document.getElementById('playerType');
    const markTypeSelect = document.getElementById('markType');
    const board = document.getElementById('board');
    const result = document.getElementById('result');
    const restartBtn = document.getElementById('restartBtn');

    let currentPlayer;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const renderBoard = () => {
        board.innerHTML = '';
        gameBoard.forEach((mark, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', index);
            cell.textContent = mark;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        });
    };

    const handleCellClick = (e) => {
        const index = e.target.getAttribute('data-index');
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                result.textContent = `${currentPlayer} is the winner!`;
                gameActive = false;
                redirectToResultPage(`${currentPlayer} wins!`);
            } else if (isBoardFull()) {
                result.textContent = "It's a tie!";
                gameActive = false;
                redirectToResultPage("It's a tie!");
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (playerTypeSelect.value === 'single' && currentPlayer === 'O') {
                    makeComputerMove();
                }
            }
        }
    };

    const makeComputerMove = () => {
        const emptyCells = gameBoard.reduce((acc, cell, index) => {
            if (cell === '') {
                acc.push(index);
            }
            return acc;
        }, []);

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerMove = emptyCells[randomIndex];

        setTimeout(() => {
            gameBoard[computerMove] = 'O';
            renderBoard();
            if (checkWinner()) {
                result.textContent = 'Computer is the winner!';
                gameActive = false;
                redirectToResultPage('Computer wins!');
            } else if (isBoardFull()) {
                result.textContent = "It's a tie!";
                gameActive = false;
                redirectToResultPage("It's a tie!");
            } else {
                currentPlayer = 'X';
            }
        }, 500);
    };

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    };

    const isBoardFull = () => {
        return gameBoard.every(cell => cell !== '');
    };

    const redirectToResultPage = (resultText) => {
        const encodedResult = encodeURIComponent(resultText);
        const url = `Result.html?result=${encodedResult}`;
        window.location.href = url;
    };

    const restartGame = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = markTypeSelect.value;
        result.textContent = '';
        renderBoard();

        if (playerTypeSelect.value === 'single' && currentPlayer === 'O') {
            makeComputerMove();
        }
    };

    
    playerTypeSelect.addEventListener('change', () => {
        restartGame();
    });

    markTypeSelect.addEventListener('change', () => {
        restartGame();
    });

    restartBtn.addEventListener('click', restartGame);

    restartGame();
});
