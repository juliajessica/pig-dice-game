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

function rollDice(number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}

function getSum(total, number) {
  return total + number;
}

function rollArrayTotal(sum) {
  return rollArray.reduce(sum)
}

function runningRollDice() {
  rollArray.push(rollDice(6))
  return rollArrayTotal(getSum);
}

function emptyRollArray() {
  return rollArray = [0];
}

//User Logic
$(function(){
  $("#player1-form").submit(function(event){
    event.preventDefault();
    var p1Name = $("#p1InputName").val();
    var playerObject = new Player(p1Name, 0);
    playerArray.push(playerObject);
    $("#player1-name").text(p1Name);
    $("#player1-scorecard").fadeIn();
  });

  $("#roll-button").click(function(){
    var p1CurrentRunningTotal = runningRollDice();
    var currentRoll = rollArray[rollArray.length-1];
    if (currentRoll === 1) {
      emptyRollArray();
      $("#p1runningTotal").text(0);
      console.log(rollArray);
    } else {
      $("#p1runningTotal").text(p1CurrentRunningTotal);
    }
    $("#rollDisplay p").text(currentRoll);
    // console.log(p1RollArray[p1RollArray.length-1]);
    $("#player1-scorecard").show();
    $("#rollDisplay").show();
  });

  $("#hold-button").click(function(){
    playerArray[0].totalScore(rollArrayTotal(getSum));
    $("#p1scoreTotal").text(playerArray[0].score);
    emptyRollArray();
    $("#p1runningTotal").text(0);
  });
});
