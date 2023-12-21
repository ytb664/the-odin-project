import { createGameBoard, createPlayer, createMatch } from "./gameLogic";

// Access objects and functions from gameLogic.js
const gameBoard = createGameBoard();
const playerX = createPlayer("Player X", "X");
const playerO = createPlayer("Player O", "O");
const match = createMatch(playerX, playerO, gameBoard);

