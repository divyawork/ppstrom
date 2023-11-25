let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

function cellClicked(cellIndex) {
  if (gameStatus[cellIndex] !== '' || !gameActive) {
    return;
  }

  gameStatus[cellIndex] = currentPlayer;
  cells[cellIndex].innerText = currentPlayer;

  checkWin();
  checkDraw();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      gameStatus[a] !== '' &&
      gameStatus[a] === gameStatus[b] &&
      gameStatus[a] === gameStatus[c]
    ) {
      gameActive = false;
      statusDisplay.innerText = `Player ${gameStatus[a]} wins!`;
    }
  }
}

function checkDraw() {
  if (!gameStatus.includes('') && gameActive) {
    gameActive = false;
    statusDisplay.innerText = 'Draw!';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  statusDisplay.innerText = '';
  cells.forEach(cell => {
    cell.innerText = '';
  });
}
