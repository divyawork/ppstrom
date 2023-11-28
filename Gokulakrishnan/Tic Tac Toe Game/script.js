document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".board");
  const cells = document.querySelectorAll(".cell");
  const status = document.querySelector(".status");
  const restartButton = document.querySelector(".restart-btn");

  let currentPlayer = "X";
  let gameActive = true;
  let gameState = ["", "", "", "", "", "", "", "", ""];

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell"));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
      return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

    // Computer's turn
    if (gameActive) {
      setTimeout(() => {
        let emptyCells = gameState.reduce(
          (acc, cell, index) => (cell === "" ? acc.concat(index) : acc),
          []
        );
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerMove = emptyCells[randomIndex];
        const cell = document.querySelector(`[data-cell="${computerMove}"]`);

        handleCellPlayed(cell, computerMove);
        handleResultValidation();
      }, 800); // Delay for better visualization
    }
  };

  const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
  };

  const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      const val1 = gameState[a];
      const val2 = gameState[b];
      const val3 = gameState[c];
      if (val1 === "" || val2 === "" || val3 === "") {
        continue;
      }
      if (val1 === val2 && val2 === val3) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      status.innerHTML = currentPlayer === "X" ? "You win!" : "Computer wins!";
      gameActive = false;
      return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
      status.innerHTML = "It's a draw!";
      gameActive = false;
      return;
    }

    handlePlayerChange();
  };

  const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer === "O" && gameActive) {
      status.innerHTML = "Computer's turn";
    } else {
      status.innerHTML = `Your turn (Player ${currentPlayer})`;
    }
  };

  const handleRestartGame = () => {
    currentPlayer = "X";
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    status.innerHTML = `Your turn (Player ${currentPlayer})`;

    cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  };

  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  restartButton.addEventListener("click", handleRestartGame);
});
