const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.board = [[1,2,3],[],[]];
  }
  run() {
    // has 3 stacks, has 3 rings of difference sizes
    // until all 3 rings are on another stack xxx
    //  getMove() from player
    // if valid move, move ring to new stack
    while (!this.gameOver()) {
      this.getMove();
    }
  }

  gameOver() {
    if (this.board.includes([1,2,3]) && this.board[0].length === 0) {
      return true;
    } else {
      return false;
    }
  }

  validMove(from, to) {
    console.log(from+","+to);
    if ([0,1,2].includes(from) && [0,1,2].includes(to) && this.board[from][0] < this.board[to][0]) {
      return true;
    } else {
      return false;
    }
  }

  executeMove(from, to) {
    this.board[to].unshift(this.board[from].shift());
  }

  render() {
    console.log(this.board);
  }

  // move() {
  //   let [from, to] = this.getMove();
  //   if (this.validMove(from, to)) {
  //     this.executeMove(from, to);
  //     this.render();
  //   } else {
  //     //message not valid move
  //     console.log('Invalid move');
  //     this.move();
  //   }
  // }

  getMove() {
    reader.question("Choose your move (format: from, to)", (res) => {
      let move = res.split(",");
      let [from, to] = move;
      if (this.validMove(from, to)) {
        this.executeMove(from, to);
        this.render();
      } else {
        //message not valid move
        console.log('Invalid move');
        this.getMove();
      }
    });
  }

}
const game = new Game();
game.render();
console.log(game.validMove(0,1));
// game.getMove();
