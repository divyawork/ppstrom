const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
const restartBtn = document.querySelector('.restart-btn');
let currentPlayer = 'X';
let gameActive = true;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleCellClick = (e) => {
  const clickedCell = e.target;
  const cellIndex = parseInt(clickedCell.getAttribute('data-cell'));

  if (clickedCell.textContent !== '' || !gameActive) return;

  placeMark(clickedCell, cellIndex);
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    changePlayer();
    setTimeout(computerTurn, 500);
  }
};

const placeMark = (cell, index) => {
  cell.textContent = currentPlayer;
};

const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer}'s Turn`;
};

const checkWin = (player) => {
  return winCombos.some((combo) => {
    return combo.every((index) => {
      return cells[index].textContent === player;
    });
  });
};

const isDraw = () => {
  return [...cells].every((cell) => {
    return cell.textContent !== '';
  });
};

const endGame = (isDraw) => {
  if (isDraw) {
    status.textContent = "It's a draw!";
  } else {
    status.textContent = `Player ${currentPlayer} wins!`;
  }
  gameActive = false;
};

const restartGame = () => {
  gameActive = true;
  currentPlayer = 'X';
  status.textContent = `Player ${currentPlayer}'s Turn`;
  cells.forEach((cell) => {
    cell.textContent = '';
  });
};

const computerTurn = () => {
  if (!gameActive) return;
  let emptyCells = [...cells].filter((cell) => cell.textContent === '');

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cellIndex = parseInt(emptyCells[randomIndex].getAttribute('data-cell'));
    placeMark(emptyCells[randomIndex], cellIndex);
    if (checkWin(currentPlayer)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      changePlayer();
    }
  }
};

cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', restartGame)