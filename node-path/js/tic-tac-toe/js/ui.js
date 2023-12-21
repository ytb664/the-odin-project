import { createGameBoard, createPlayer, createMatch } from "./gameLogic";

// Access objects and functions from gameLogic.js
const gameBoard = createGameBoard();
const playerX = createPlayer("Player X", "X");
const playerO = createPlayer("Player O", "O");
const match = createMatch(playerX, playerO, gameBoard);

(() => {

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
        const header = appendElementWithClass(container, 'header');
        const main = appendElementWithClass(container, 'main');
        const footer = appendElementWithClass(container, 'footer');

        const turn = appendElementWithClass(main, 'div', 'turn');
        const board = appendElementWithClass(main, 'div', 'board');
        const btn = appendElementWithClass(main, 'button', 'reset');

        return { container, header, main, footer, turn, board, btn };
    })();
})();