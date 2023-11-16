document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const status = document.getElementById("status");
  const resetButton = document.getElementById("resetButton");

  let currentPlayer = "X";
  let board = ["", "", "", "", "", "", "", "", ""];

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every((cell) => cell !== "");
  };

  const minimax = (currentBoard, maximizingPlayer) => {
    const winner = checkWinner();
    if (winner === "X") {
      return { score: -10 };
    } else if (winner === "O") {
      return { score: 10 };
    } else if (isBoardFull()) {
      return { score: 0 };
    }

    const availableMoves = [];
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === "") {
        const move = {};
        move.index = i;
        currentBoard[i] = maximizingPlayer ? "O" : "X";
        if (maximizingPlayer) {
          const result = minimax(currentBoard, false);
          move.score = result.score;
        } else {
          const result = minimax(currentBoard, true);
          move.score = result.score;
        }
        currentBoard[i] = "";
        availableMoves.push(move);
      }
    }

    let bestMove;
    if (maximizingPlayer) {
      let bestScore = -Infinity;
      for (let i = 0; i < availableMoves.length; i++) {
        if (availableMoves[i].score > bestScore) {
          bestScore = availableMoves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < availableMoves.length; i++) {
        if (availableMoves[i].score < bestScore) {
          bestScore = availableMoves[i].score;
          bestMove = i;
        }
      }
    }

    return availableMoves[bestMove];
  };

  const makeComputerMove = () => {
    const bestMove = minimax(board, true).index;
    board[bestMove] = "O";
    render();
    const winner = checkWinner();
    if (winner) {
      status.textContent = `Player ${winner} wins!`;
      disableClicks();
    } else if (isBoardFull()) {
      status.textContent = "It's a draw!";
      disableClicks();
    } else {
      currentPlayer = "X";
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  };

  const handleCellClick = (index) => {
    if (board[index] === "") {
      board[index] = currentPlayer;
      render();
      const winner = checkWinner();
      if (winner) {
        status.textContent = `Player ${winner} wins!`;
        disableClicks();
      } else if (isBoardFull()) {
        status.textContent = "It's a draw!";
        disableClicks();
      } else {
        currentPlayer = "O";
        status.textContent = "Computer's turn";
        setTimeout(makeComputerMove, 800);
      }
    }
  };

  const disableClicks = () => {
    gameBoard.querySelectorAll(".cell").forEach((cell) => {
      cell.removeEventListener("click", cellClickHandler);
    });
  };

  const cellClickHandler = (event) => {
    const index = event.target.dataset.index;
    handleCellClick(index);
  };

  const resetGame = () => {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    render();
    status.textContent = `Player ${currentPlayer}'s turn`;
    gameBoard.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("click", cellClickHandler);
    });
  };

  const render = () => {
    gameBoard.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.textContent = board[i];
      cellElement.dataset.index = i;
      cellElement.addEventListener("click", cellClickHandler);
      gameBoard.appendChild(cellElement);
    }
  };

  render();

  resetButton.addEventListener("click", resetGame);
});
