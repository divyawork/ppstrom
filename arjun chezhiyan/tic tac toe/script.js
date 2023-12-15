let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick() {
    const index = this.dataset.index;
    
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        this.textContent = currentPlayer;
        checkWinner();
        switchPlayer();
        updateStatus();
        if (gameActive) {
            computerMove();
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateStatus() {
    statusDisplay.textContent = gameActive ? `Player ${currentPlayer}'s turn` : 'Game Over';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            highlightWinner(pattern);
            break;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        statusDisplay.textContent = 'It\'s a draw!';
    }
}

function highlightWinner(pattern) {
    for (const index of pattern) {
        cells[index].style.backgroundColor = '#2ecc71';
        cells[index].style.color = '#fff';
    }
}

function computerMove() {
    const emptyCells = gameBoard.reduce((acc, value, index) => {
        if (!value) acc.push(index);
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const computerChoice = emptyCells[randomIndex];

    setTimeout(() => {
        if (gameActive) {
            gameBoard[computerChoice] = currentPlayer;
            cells[computerChoice].textContent = currentPlayer;
            checkWinner();
            switchPlayer();
            updateStatus();
        }
    }, 500);
}
