// Game board factory
const createGameBoard = () => {

    const board = Array(9).fill(null);

    const getBoard = () => board;

    // Function to mark a cell on the board
    const markCell = (index, marker) => {

        // Check if the index is valid and the cell is empty
        if (index >= 0 && index < 9 && board[index] === null) {

            board[index] = marker;
            return true;
        }

        return false;
    }

    const resetBoard = () => {

        for (let i = 0; i < board.length; i++) {
            board[i] = null;
        }
    }

    return { getBoard, markCell, resetBoard };
};

// Player factory
const createPlayer = (name, marker) => {

    const playerName = name;
    const playerMarker = marker;

    const getName = () => playerName;
    const getMarker = () => playerMarker;

    return { getName, getMarker };
}

// Match factory
const createMatch = (playerX, playerO, gameBoard) => {

    let currentPlayer = playerX;

    const switchPlayer = () => {

        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    };

    const mark = (index) => {

        if (checkWin()) {

            return false;
        }

        if (gameBoard.markCell(index, currentPlayer.getMarker())) {

            switchPlayer();
            return true;
        }

        return false;
    };

    const checkWin = () => {

        const board = gameBoard.getBoard();

        const winningCombination = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
            [0, 4, 8], [2, 4, 6]                // Diagonals
        ];

        for (const combo of winningCombination) {

            const [a, b, c] = combo;

            const isNotNull = board[a] !== null;
            const isSameMark = board[a] === board[b] && board[a] === board[c];

            // Check if the markers at positions a, b, and c are the same and not null
            if (isNotNull && isSameMark) {

                return board[a]; // We have a winner
            }
        }

        return null;
    };

    const checkDraw = () => {

        const board = gameBoard.getBoard();

        // Check for a win first
        if (checkWin()) {
            
            return false;
        }

        return !board.includes(null);
    };

    const resetMatch = () => {

        gameBoard.resetBoard();
        currentPlayer = playerX;
    };

    const getCurrentPlayer = () => currentPlayer;

    return {
        mark,
        checkWin,
        checkDraw,
        resetMatch,
        getCurrentPlayer
    };
}

export { createGameBoard, createPlayer, createMatch };