/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);

      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      } 
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};



/*
PseudoCode:
  /declare variable called jM=0 and iM=0, rookCount =0

  /declare recursive Inner function 
    if rookCount = n, then we do 
      /generate a new board with coordinates (i--> row index, j --> col index)
      /toggle the (0,0) position and set equal to 1. 
    /Else
    /start itteration from (iM, jM)
      /toggle (0,1) and check for conflict
        /if there is conflict, then untoggle that piece and move to next cell.
        /if there is no conflict, then keep piece at 1 and set iM, jM to the position where there is no conflict
      /then recurse by calling function back
*/  




//return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  
  var findSolution = function(row) {
    if(row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if( !board.hasAnyRooksConflicts() ) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  
  findSolution(0)
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
/*
/create a queenCount
/start toggle 0,0, iterate through table to place all possible queens, incease queenCount each time we add a queen.
  /at end of iteration, check if queenCount === 4.
  /if queen count is === 4, return solution
  /if queen count is less than 4, re-set board, in

*/

window.findNQueensSolution = function(n) { 
  var board = new Board({n: n});
  
  var innerFunc = function(r) {
    //our base case is when we know we have solution.
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, r);
      if (!board.hasAnyQueensConflicts(i, r)) {
        innerFunc(r + 1);
      }
      board.togglePiece(i, r);
    }
    
    
  }
  
  //what happend if we cant put a queen on a row

 
console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows());
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
