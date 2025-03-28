import BoardTile from './Tile.js'

class Board {
    constructor(width = 10, length = 10) {
        this.l = length
        this.w = width
        this.board = Array.from({ length: length }, () => Array.from({ length: width }, () => new BoardTile()));
    }
}

export default Board