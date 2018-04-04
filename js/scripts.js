//Business Logic
// var p1RunningTotal = 0;
var p1RollArray =[];

function rollDice(number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}

function getSum(total, number) {
  return total + number;
}

function runningRollDice(number) {
  p1RollArray.push(rollDice(6))
  return p1RollArray.reduce(getSum);
}




//User Logic
$(function(){
  $("#roll-button").click(function(event){
    var p1CurrentRunningTotal = runningRollDice(6);
    $("#p1runningTotal").text(p1CurrentRunningTotal);
    console.log(p1RollArray[p1RollArray.length-1]);
    $("#player1-scorecard").show();
    event.preventDefault();
  });
});
