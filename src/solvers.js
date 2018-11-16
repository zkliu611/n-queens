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
window.findNQueensSolution = function(n) { 
  
  if (n === 0) {
    return []
  }
  
  if (n === 2) {
    return [[0, 0], [0, 0]];
  }
  
  if (n === 3) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  }
  
  var board = new Board({n: n});
  var solution = [];
  
  
  var innerFunc = function(r) {
    if (r === n) {
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
      var currentSolution = [];
      for (var i = 0; i < n; i++) {
        currentSolution.push(board.rows()[i].slice())
      }
      solution.push(currentSolution);
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if (!board.hasAnyQueensConflicts(r, i)) {
        innerFunc(r + 1);
      }
      board.togglePiece(r, i);
    }
  }
  
  innerFunc(0);
  return solution[0];
  
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
 var solutionCount = 0;
  var board = new Board({n: n});
  
  var findSolution = function(row) {
    if(row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if( !board.hasAnyQueensConflicts() ) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  
  findSolution(0)
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount; 
};






