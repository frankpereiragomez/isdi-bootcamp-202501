var cells = [[], [], []];

var maxRows = 3;
var maxColumns = 3;
var player = "x";

for (var i = 0; i < maxRows; i++) {
  for (var j = 0; j < maxColumns; j++) {
    //console.log(i, j)
    cells[i][j] = "-";
  }
}

function askForMove() {
  var move = prompt(
    "Player " + player + " Make a move (row,column) (ej. 0,1):"
  );

  if (move === null) {
    console.log("The play was cancelled");
    return null;
  }

  var row = Number(move[0]);
  var column = Number(move[2]);

  return [row, column];
}

function makeMove() {
  var coordenates = askForMove();

  if (!coordenates) return false;

  var row = coordenates[0];
  var column = coordenates[1];

  if (cells[row][column] !== "-") {
    console.log("Invalid move, this cell is in use");

    return makeMove();
  }

  cells[row][column] = player;

  player = player === "x" ? "o" : "x";
}

function checkIfEquals(a, b, c) {
  return a !== "-" && a === b && b === c;
}

function checkForWinner() {
  for (var i = 0; i < maxRows; i++) {
    if (checkIfEquals(cells[i][0], cells[i][1], cells[i][2])) {
      console.log("The player " + cells[i][0] + " win by row!");

      return cells[i][0];
    }
  }

  for (var i = 0; i < maxColumns; i++) {
    if (checkIfEquals(cells[0][i], cells[1][i], cells[2][i])) {
      console.log("The player " + cells[0][i] + " win by column!");

      return cells[0][i];
    }
  }

  if (checkIfEquals(cells[0][0], cells[1][1], cells[2][2])) {
    console.log("The player " + cells[0][0] + " win by diagonal!");

    return cells[0][0];
  }

  if (checkIfEquals(cells[0][2], cells[1][1], cells[2][0])) {
    console.log("The player " + cells[0][0] + " win by diagonal!");

    return cells[0][2];
  }
}
