// script.js

const board = document.getElementById('board');
const result = document.getElementById('result');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function renderBoard() {
  board.innerHTML = '';
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.dataset.index = index;
    cellElement.textContent = cell;
    cellElement.addEventListener('click', handleCellClick);
    board.appendChild(cellElement);
  });
}

function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      displayResult(`${gameBoard[a]} wins!`);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    displayResult('It\'s a draw!');
  }
}

function displayResult(message) {
  result.textContent = message;
  gameActive = false;
}

renderBoard();
