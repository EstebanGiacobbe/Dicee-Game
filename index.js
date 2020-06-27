
function startGame(){

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  }
  else if (randomNumber2 > randomNumber1){
      document.querySelector("h1").innerHTML = "CPU wins!";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

  }

function renamePlayer(){
  var playerName = prompt("What's your name?");

  document.querySelector("#player-name").innerHTML = playerName;
}
