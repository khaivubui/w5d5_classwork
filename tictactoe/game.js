const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(board) {
    this.board = board;
    this.mark1 = 'x';
    this.mark2 = 'o';
    this.currentMark = this.mark1;
  }

  switchTurn() {
    if (this.currentMark === this.mark1) {
      this.currentMark = this.mark2;
    } else {
      this.currentMark = this.mark1;
    }
  }

  allPositions(mark) {
    let result = [];
    for (let row = 0; row < this.board.grid.length; row++) {
      for (let col = 0; col < this.board.grid[0].length; col++) {
        if (this.board.grid[row][col] === mark) {
          result.push([row, col]);
        }
      }
    }
  }

  anyWin(mark) {
    let allPos = this.allPositions(mark);
    if (this.horizontalWin(allPos) || this.verticalWin(allPos) || this.diagonalWin(allPos)) {
      return true;
    } else {
      return false;
    }
  }

  horizontalWin(allPos) {
    const allRows = allPos.map(pos => pos[0]);
    if (allRows.filter(x => x===0).length===3 ||
        allRows.filter(x => x===1).length===3 ||
        allRows.filter(x => x===2).length===3) {
          return true;
    } else {
      return false;
    }
  }

  verticalWin(allPos) {
    const allCols = allPos.map(pos => pos[1]);
    if (allCols.filter(x => x===0).length===3 ||
        allCols.filter(x => x===1).length===3 ||
        allCols.filter(x => x===2).length===3) {
          return true;
    } else {
      return false;
    }
  }

  diagonalWin(allPos) {
    if(allPos.filter(pos => pos[0]=== pos[1]).length===3 ||
      allPos.filter(pos => pos[0]=== 2 - pos[1]).length===3) {
        return true;
    } else {
      return false;
    }
  }

  run() {
    reader.question(`Player ${this.currentMark}, enter your next position (format: x,y)`, (res) => {
      let move = res.split(",").map(el => parseInt(el));
    });
  }
}
