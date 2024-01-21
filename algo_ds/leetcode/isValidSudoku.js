var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set(),
      columnSet = new Set(),
      subSudokuSet = new Set();

    for (let j = 0; j < 9; j++) {
      const row = board[i][j];
      const column = board[j][i];
      const subSudoku =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (row != ".") {
        if (rowSet.has(row)) return false;
        rowSet.add(row);
      }

      if (column != ".") {
        if (columnSet.has(column)) return false;
        columnSet.add(column);
      }

      if (subSudoku != ".") {
        if (subSudokuSet.has(subSudoku)) return false;
        subSudokuSet.add(subSudoku);
      }
    }
  }
  return true;
};
