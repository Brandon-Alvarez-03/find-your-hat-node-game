# Find Your Hat Game

A command-line game where the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

## Table of Contents

- [Find Your Hat Game](#find-your-hat-game)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [How to Play](#how-to-play)
  - [Game Logic](#game-logic)
  - [Technologies Used](#technologies-used)

## Installation

1. Clone the repository to your local machine.
2. Install Node.js if you haven't already.
3. Open a terminal window in the project directory.
4. Run the command `npm install` to install the required dependencies.

## How to Play

1. Open a terminal window in the project directory.
2. Run the command `node main.js` to start the game.
3. Follow the on-screen instructions to play the game.
4. Use the arrow keys to move the player character in the field.
5. Try to reach the hat (^) without falling into a hole (O) or going outside of the field.
6. If you land on a hole or go outside of the field, the game is over.
7. If you reach the hat, you win!

## Game Logic

The game is implemented using a `Field` class that represents the game field. The class has methods to print the field, move the player character, and generate a random field with a hat and holes.

The game loop is implemented in the `playGame()` function, which creates a new `Field` instance and runs a loop that prints the field, prompts the player for a move, and updates the game status based on the move. The loop continues until the game is won or lost, at which point the game over message is displayed.

## Technologies Used

- JavaScript
- Node.js
- prompt-sync package for user input in the terminal
