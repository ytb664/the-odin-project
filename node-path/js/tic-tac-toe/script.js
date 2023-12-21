// Game board factory
const createGameBoard = (() => {

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
})();

// Player factory
const createPlayer = (name, marker) => {

    const playerName = name;
    const playerMarker = marker;

    const getName = () => playerName;
    const getMarker = () => playerMarker;

    return { getName, getMarker };
}