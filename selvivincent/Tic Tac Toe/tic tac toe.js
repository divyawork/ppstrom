document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    const statusDisplay = document.querySelector('.status');
  
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  
    function handleCellClick(event) {
      const selectedCell = event.target;
      if (!selectedCell.textContent) {
        selectedCell.textContent = currentPlayer;
        if (checkWinner(currentPlayer)) {
          statusDisplay.textContent = `${currentPlayer} wins!`;
          setTimeout(resetBoard, 1000);
          return;
        }
        if (isBoardFull()) {
          statusDisplay.textContent = "It's a draw!";
          setTimeout(resetBoard, 1000);
          return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `Player's Turn: ${currentPlayer}`;
        if (currentPlayer === 'O') {
          computerTurn();
        }
      }
    }
  
    function computerTurn() {
      const availableCells = [...cells].filter(cell => !cell.textContent);
      const randomIndex = Math.floor(Math.random() * availableCells.length);
      const selectedCell = availableCells[randomIndex];
      setTimeout(() => {
        selectedCell.textContent = currentPlayer;
        if (checkWinner(currentPlayer)) {
          statusDisplay.textContent = `${currentPlayer} wins!`;
          setTimeout(resetBoard, 1000);
          return;
        }
        if (isBoardFull()) {
          statusDisplay.textContent = "It's a draw!";
          setTimeout(resetBoard, 1000);
          return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `Player's Turn: ${currentPlayer}`;
      }, 500);
    }
  
    function checkWinner(player) {
      return winningCombos.some(combo => {
        return combo.every(index => {
          return cells[index].textContent === player;
        });
      });
    }
  
    function isBoardFull() {
      return [...cells].every(cell => cell.textContent);
    }
  
    function resetBoard() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
      statusDisplay.textContent = `Player's Turn: ${currentPlayer}`;
    }
  });
  