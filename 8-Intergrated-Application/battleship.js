var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHtml = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ["10", "11", "12"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
  ],

  fire: function (guess) {

    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      // locations = ship.locations;
      // var index = locations.indexOf(guess);

      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false; // 注意位置在 for 外面。
  },

  isSunk: function (ship) {
    for (var i = 0; i < shipLength; i++) {
      if (hip.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
};

// model.fire("53");

var controller = {
  guesses: 0,
  processGuess: function(guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
    }
  }
}

function parseGuess(guess) {
  var alphabet = ["A", "B", "c", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar); // 索引
    var column = guess.charAt(1); // 字符串，用户输入 guess 里的第二个字符

    if (isNaN(row) || isNaN(column)) { // 会先尝试将 column 转换成数字，row 是索引数字
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSizea) {  // column 是数字字符串, 这里利用了自动类型转换。
      alert("Oops, that's off the board!");
    } else {
      return row + column;  // 数字和字符串拼接，结果是字符串
    }
  }
  return null;
}






