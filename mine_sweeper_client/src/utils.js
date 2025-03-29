import Board from './Classes/Board.js'

export function handleBoardClick(board, rowIndex, cellIndex) {
    // Create a copy of the board to maintain immutability
    const newBoard = new Board(board.w, board.l);
    newBoard.board = board.board.map((row, rIdx) =>
      rIdx === rowIndex
        ? row.map((cell, cIdx) => {
            // Log the value of the clicked cell
            if (rIdx === rowIndex && cIdx === cellIndex) {
              if (cell.value === ' X ') {
                console.log('I am a bomb!');
              } else {
                console.log('I am not a bomb.');
              }
            }

            // Update the clicked cell's state (turning it)
            return cIdx === cellIndex ? { ...cell, is_turned: true } : cell;
          })
        : row
    );

    if (newBoard.board[rowIndex][cellIndex].value == ' X '){
        handleBomb()
    } else {
        handleNotABomb()
    }

    return newBoard; // Return the new board with the updated tile
  }

