/***** pseudo ******/
function donnees() {
var pseudo= document.formulaire.text.value;

document.getElementById('result').innerHTML = "Bienvenue :" + " " + pseudo;
}

/******* images cliquable ********/
var gamePictures = document.getElementsByClassName("gamePicture");
for (i=0; i< gamePictures.length; i++) {
 gamePictures[i].onclick = function () {
 gamePictures[i].getAttribute("alt");
 alert();
 }
}

/******* random ordinateur ********/

var computer;

while (pointUser < 3 && pointComputer <  3) {
  user = prompt("Pierre, feuille ou ciseaux");
  computer = Math.floor((Math.random() * 3) + 1);

  if (computer === 1) {
    computer="pierre";
  }
  else if (computer === 2) {
    computer="feuille";
  }
  else {
    computer="ciseaux";
  }
