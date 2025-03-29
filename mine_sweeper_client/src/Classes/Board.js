import BoardTile from './Tile.js'

class Board {
    constructor(width = 10, length = 10) {
        this.l = length
        this.w = width
        this.board = Array.from({ length: length }, () => Array.from({ length: width }, () => new BoardTile()));
        this.game_over = false;
    }

    // outputs the 2d array of tiles as a string of values that contain each tiles "value"
    outputState() {
        let output = ''
        for(let row of this.board) {
            for(let til of row){
                if (til.is_turned) {
                    output += til.value
                } else {
                    output += '-'
                }
            }
        }
        console.log(output)
        return output
    }

    // testing only method
    output2dArray() {
        const tmp = this.outputState()
        for (let i = 0; i < tmp.length; i += this.w) {
            console.log(tmp.slice(i, i + this.w)); // Extract a row and print it
        }
    }

    // initializes the bomb placement on the board, default value of 10
    initBombs(num_bombs = 10){
        let locations = new Set();

        while (locations.size < num_bombs) {
            locations.add(Math.floor(Math.random() * (this.l * this.w)));
        }
        locations = [...locations];

        for (let loc of locations) {
            const rIdx = Math.floor(loc / this.l); // Calculate the row index
            const cIdx = loc % this.w; // Calculate the column index
            console.log(rIdx, cIdx);
            this.board[rIdx][cIdx].value = 'x'; // Mark this cell as a bomb (x)
            this.board[rIdx][cIdx].is_bomb = true;
        }
    }

    // calculates the number of adj bombs for a row/col idx and returns the number
    calculateAdjBombs(row, col){
        const directions = [
            [-1, -1], [-1, 0], [-1, 1], // Top-left, Top, Top-right
            [0, -1],         [0, 1],  // Left,        Right
            [1, -1], [1, 0], [1, 1]  // Bottom-left, Bottom, Bottom-right
        ];

        let adjBombs = 0;
        for (let [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            // Check if new position is within bounds
            if (newRow >= 0 && newRow < this.l &&
                newCol >= 0 && newCol < this.w &&
                this.board[newRow][newCol].value === "x") {
                adjBombs++;
            }
        }

        return adjBombs;
    }

    // for all squares that are not bombs, set their value to the number of adj bombs
    initNonBombs() {
        for (let row = 0; row < this.l; row++) {
            for (let col = 0; col < this.w; col++) {
                if (this.board[row][col].is_bomb == false){
                    this.board[row][col].value = this.calculateAdjBombs(row, col).toString()
                }
            }
        }
    }

    // takes in row and col of tile that was clicked returns a boolean value denoting whether it was a bomb or not
    isBomb(row, col) {
        if (this.board[row][col].value == 'x') {
            return true
        }
        return false
    }

    // takes in the row and col of the tile that was clicked and flips over all other tiles as needed
    flipTiles(row, col) {

    }

    // flips all tiles at the end of the game
    flipAllTiles() {
        for(let row of this.board) {
            for(let col of row){
                col.is_turned = true
            }
        }
    }

    // performs bomb check and flips tiles accordingly
    handleBoardClick(row, col) {
        if(this.board[row][col].is_bomb){
            this.game_over = true
            this.flipAllTiles()
        } else {
            this.board[row][col].is_turned = true
            console.log('i was flipped')
        }
    }
}

// const test = new Board(10, 10)
// test.initBombs()
// test.initNonBombs()
// console.log(test.board)
// console.log(test.outputState())
// console.log(test.output2dArray())


export default Board