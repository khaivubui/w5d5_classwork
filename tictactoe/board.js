class Board {
  constructor() {
    this.grid = [[undefined,undefined,undefined],
                 [undefined,undefined,undefined],
                 [undefined,undefined,undefined]];
  }

  placeMark(pos, mark) {
    let [row, col] = pos;
    this.grid[row][col] = mark;
  }

  render() {
    console.log(this.grid[0]);
    console.log(this.grid[1]);
    console.log(this.grid[2]);
  }
}

const board = new Board();
board.placeMark([2,2],'x');
board.render();
