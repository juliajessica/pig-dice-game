//Business Logic
function rollDice(number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}


//User Logic
$(function(){
  $("#roll-button").click(function(event){
    $("#p1runningTotal").text(rollDice(6));
    $("#player1-scorecard").show();
    event.preventDefault();
  });
});
