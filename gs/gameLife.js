/*


According to the Wikipedia's article: 
"The Game of Life, also known simply as Life, 
is a cellular automaton devised by the British mathematician 
John Horton Conway in 1970."

Given a board with m by n cells, 
each cell has an initial state live (1) or dead (0). 
Each cell interacts with its eight neighbors 
(horizontal, vertical, diagonal) 
using the following four rules 
(taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input:
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output:
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

*/

var gameOfLife = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let numLiving = livingNeighbors(board, i, j)
            if (board[i][j] > 0) {
                if(numLiving < 2 || numLiving > 3){
                    board[i][j] = 0
                }else{
                    board[i][j] = 1
                }
            } else {
                if(numLiving === 3){
                    board[i][j] = 1
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] %= 2
        }
    }
    return board

    
};

var livingNeighbors = function (board, i, j) {

    let count = 0
    let indexes = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]
    for (let index of indexes) {
        if (index[0] + i < 0 || index[0] + i > board.length - 1 ||
            index[1] + j < 0 || index[1] + j > board[0].length - 1) continue
        if (board[index[0] + i][index[1] + j] === 1 ||
            board[index[0] + i][index[1] + j] === 2) count++
    }
    return count
}

board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]

console.log(gameOfLife(board))