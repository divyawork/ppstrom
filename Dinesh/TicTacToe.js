document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    const cells = Array.from({ length: 9 });

    function createCell(index) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', () => cellClick(index));
        return cell;
    }

    function render() {
        board.innerHTML = '';
        cells.forEach((value, index) => {
            const cell = createCell(index);
            cell.textContent = value;
            board.appendChild(cell);
        });
    }

    function cellClick(index) {
        if (cells[index] || checkWinner()) {
            return;
        }

        cells[index] = currentPlayer;
        render();

        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else if (cells.every(cell => cell)) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWinner() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winConditions.some(condition =>
            condition.every(index => cells[index] === currentPlayer)
        );
    }

    function resetGame() {
        cells.fill(null);
        currentPlayer = 'X';
        render();
    }

    render();
});
