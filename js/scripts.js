//Business Logic
// var p1RunningTotal = 0;
var rollArray =[];

function rollDice(number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}

function getSum(total, number) {
  return total + number;
}

function runningRollDice(number) {
  rollArray.push(rollDice(6))
  return rollArray.reduce(getSum);
}

function emptyRollArray() {
  return rollArray.length = 0
}



//User Logic
$(function(){
  $("#player1-form").submit(function(event){
    event.preventDefault();

  var p1Name = $("#p1InputName").val();
  console.log(p1Name);
  $("#player1-name").text(p1Name);

  $("#player1-scorecard").fadeIn();


  });
  $("#roll-button").click(function(){
    var p1CurrentRunningTotal = runningRollDice(6);
    $("#p1runningTotal").text(p1CurrentRunningTotal);
    // console.log(p1RollArray[p1RollArray.length-1]);
    $("#player1-scorecard").show();
  });
  $("#hold-button").click(function(){
    $("#p1scoreTotal").text(rollArray.reduce(getSum));
    emptyRollArray();
    $("#p1runningTotal").text(0);
    console.log(rollArray);
  });
});
