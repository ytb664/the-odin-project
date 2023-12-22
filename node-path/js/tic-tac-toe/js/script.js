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

    const getCurrentPlayer = () => currentPlayer.getMarker();

    return {
        mark,
        checkWin,
        checkDraw,
        resetMatch,
        getCurrentPlayer
    };
}

// Access objects and functions
const gameBoard = createGameBoard();
const playerX = createPlayer("Player X", "X");
const playerO = createPlayer("Player O", "O");
const match = createMatch(playerX, playerO, gameBoard);

const createUI = (() => {

    // Appends elements to a parent
    const appendElements = (parent, ...elements) => {

        elements.forEach((element) => {
            parent.appendChild(element);
        });
    };

    // Creates an element with a specified tag and class
    const createElementWithClass = (tagName, className) => {

        const element = document.createElement(tagName);
        element.classList.add(className);

        return element;
    };

    // Appends an element with a specified tag and class to a parent
    const appendElementWithClass = (parent, tagName, className) => {

        const element = createElementWithClass(tagName, className);
        parent.appendChild(element);

        return element;
    };

    // Initializes UI elements
    const initializeUI = (() => {

        const container = document.querySelector('.container');
        const header = appendElementWithClass(container, 'header', 'header');
        const main = appendElementWithClass(container, 'main', 'main');
        const footer = appendElementWithClass(container, 'footer', 'footer');

        const turn = appendElementWithClass(main, 'div', 'turn');
        const board = appendElementWithClass(main, 'div', 'board');
        const btn = appendElementWithClass(main, 'button', 'reset');

        header.textContent = 'Tic-Tac-Toe';
        turn.textContent = `${match.getCurrentPlayer()} turn`;
        btn.textContent = 'Restart';
        footer.textContent = 'Copyright \u00A9 2023 ytb664';

        const displayBoard = (() => {

            const ul = document.createElement('ul');
            board.appendChild(ul);

            for (let i = 0; i < gameBoard.getBoard().length; i++) {

                const li = document.createElement('li');
                li.textContent = gameBoard.getBoard()[i];

                ul.appendChild(li);
            }
        })

        displayBoard();

        return { container, header, main, footer, turn, board, btn };
    })();
})();