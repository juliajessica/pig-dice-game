//Business Logic
function Player(userName,score) {
  this.userName = userName;
  this.score = score;
}

Player.prototype.totalScore = function (number) {
  return this.score += number;
};

var playerArray = [];
var rollArray = [0];

function emptyRollArray() {
  return rollArray = [0];
}

function rollDice(number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}

function getSum(total, number) {
  return total + number;
}

function rollArrayTotal(sum) {
  return rollArray.reduce(sum)
}

function runningRollDiceComputer() {
  for (var i=0; i < 2; i++) {

    rollArray.push(rollDice(6))
    var currentRollComputer = rollArray[rollArray.length-1];
    if (currentRollComputer === 1) {
      console.log(rollArray);
      emptyRollArray();
      i=2;
      return 0;
    } else {
      console.log(rollArray);
      return rollArrayTotal(getSum);
    }
  }
}

function runningRollDicePlayer() {
  rollArray.push(rollDice(6))
  var currentRollPlayer = rollArray[rollArray.length-1];
  if (currentRollPlayer === 1) {
    emptyRollArray();
    return 0 //return 0 for running total
    runningRollDiceComputer();
    debugger;
  } else {
    return rollArrayTotal(getSum);
  }
}

//User Logic
$(function(){
  $("#player1-form").submit(function(event){
    event.preventDefault();
    var p1Name = $("#p1InputName").val();
    var playerObject = new Player(p1Name, 0);
    var computerObject = new Player("Bob", 0);
    playerArray.push(playerObject, computerObject);
    $("#player1-name").text(p1Name);
    $("#player1-scorecard").fadeIn();
    $("#player2-name").text("Bob");
    $("#player2-scorecard").fadeIn();
    $("#p1-hide").hide();
  });

  $("#roll-button").click(function(){
    var p1CurrentRunningTotal = runningRollDicePlayer();
    var currentRollPlayer= rollArray[rollArray.length-1];
    console.log(rollArray);
    debugger;
    $("#p1runningTotal").text(p1CurrentRunningTotal);
    $("#rollDisplay p").text(currentRollPlayer);
    $("#player1-scorecard").show();
    $("#rollDisplay").show();
    var computerCurrentRunningTotal =
    $("#p2runningTotal").text(computerCurrentRunningTotal);
    // $("#rollDisplay p").text(currentRollplayer);
    $("#player2-scorecard").show();
  });
      //
      // console.log(rollArray);
      // runningRollDice();
      // var currentRollComputer= rollArray[rollArray.length-1];
      // while (currentRollComputer !== 1) {
      //   $("#p2runningTotal").text(rollArrayTotal(getSum));
      //   console.log("test!");
      //   console.log(rollArray);
      //   $("#p2scoreTotal").text(playerArray[1].totalScore(rollArrayTotal(getSum)));
      //   runningRollDice();
      // }
      //   emptyRollArray();
});
