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
    if (this.board[1].length ===3 || this.board[2].length ===3) {
      return true;
    } else {
      return false;
    }
  }

  validMove(from, to) {
    if (this.board[from][0] > this.board[to][0]) {
      return false;
    } else {
      return true;
    }
  }

  executeMove(from, to) {
    this.board[to].unshift(this.board[from].shift());
  }

  render() {
    console.log(this.board);
  }

  move(move) {
    let [from, to] = move;
    if (this.validMove(from, to)) {
      this.executeMove(from, to);
      this.render();
      if (this.gameOver()) {
        console.log('You win!!!!');
        reader.close();
      } else {
        this.run();
      }
    } else {
      //message not valid move
      console.log('Invalid move');
      this.render();
      this.run();
    }
  }

  run() {
    reader.question("Choose your move (format: from, to)", (res) => {
      let move = res.split(",");
      move = move.map((el) => parseInt(el));
      this.move(move);
    });
  }

}
const game = new Game();
game.run();
// game.board=[[],[1,2,3],[]];
// console.log(game.gameOver());
