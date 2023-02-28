const prompt = require("prompt-sync")({sigint: true});
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
    this.playerPosition = [0, 0];
    this.gameStatus = "ongoing";
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      let row = "";
      for (let j = 0; j < this.field[i].length; j++) {
        if (i === this.playerPosition[0] && j === this.playerPosition[1]) {
          row += pathCharacter;
        } else {
          row += this.field[i][j];
        }
      }
      console.log(row);
    }
  }

  move(direction) {
    let [i, j] = this.playerPosition;

    if (direction === "up") {
      i--;
    } else if (direction === "down") {
      i++;
    } else if (direction === "left") {
      j--;
    } else if (direction === "right") {
      j++;
    }

    if (i < 0 || i >= this.field.length || j < 0 || j >= this.field[0].length) {
      this.gameStatus = "lost";
      console.log("You went outside of the field. Game over.");
    } else if (this.field[i][j] === hole) {
      this.gameStatus = "lost";
      console.log("You fell into a hole. Game over.");
    } else if (this.field[i][j] === hat) {
      this.gameStatus = "won";
      console.log("Congratulations! You found your hat.");
    } else {
      this.field[this.playerPosition[0]][this.playerPosition[1]] =
        pathCharacter;
      this.playerPosition = [i, j];
      this.field[i][j] = pathCharacter;
    }
  }

  static generateField(height, width, percentage) {
    const fieldArray = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        if (Math.random() < percentage / 100) {
          row.push(hole);
        } else {
          row.push(fieldCharacter);
        }
      }
      fieldArray.push(row);
    }

    let hatPlaced = false;
    while (!hatPlaced) {
      const i = Math.floor(Math.random() * height);
      const j = Math.floor(Math.random() * width);
      if (fieldArray[i][j] !== hole) {
        fieldArray[i][j] = hat;
        hatPlaced = true;
      }
    }
    return fieldArray;
  }
}

function playGame() {
  const height = 10;
  const width = 10;
  const percentage = 20;
  const myField = new Field(Field.generateField(height, width, percentage));

  while (myField.gameStatus === "ongoing") {
    myField.print();

    const direction = prompt("Which direction would you like to move?");

    myField.move(direction);
  }

  console.log("Game over.");
}

playGame();
