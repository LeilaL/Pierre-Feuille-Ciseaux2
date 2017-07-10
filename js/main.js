/***** entrer pseudo ******/
function donnees() {
var pseudo= document.formulaire.text.value;

document.getElementById('result').innerHTML = "Bienvenue :" + " " + pseudo;
}

/******* recuparation images alt ********/
var gamePictures = document.getElementsByClassName("gamePicture");
for (i=0; i< gamePictures.length; i++) {
 gamePictures[i].onclick = function () {
 game(this.alt);
 };
}

var pointUser = 0;
var pointComputer = 0;
var user;
var computer;

function game (user) {

if (pointUser < 3 && pointComputer <  3) {
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

  document.getElementById("choixOrdi").innerHTML ="l'Ordinateur: " + computer;

  if (user === computer) {
  }

  else if (user === "pierre" && computer === "ciseaux") {
    pointUser++;
  }


  else if (user === "feuille" && computer === "pierre") {
    pointUser++;
  }

  else if (user === "feuille" && computer === "ciseaux") {
      pointComputer++;
        }

        else if (user === "pierre" && computer === "feuille") {
      pointComputer++;
        }

        else if (user === "ciseaux" && computer === "feuille") {
      pointUser++;
      }

  else if (user === "ciseaux" && computer === "pierre") {
    pointComputer++;
  }

  document.getElementById("pointJoueur").innerHTML = pointUser + " - ";
  document.getElementById("pointOrdi").innerHTML = pointComputer;
}

  else if (pointUser === 3) {
    document.getElementById("winner").innerHTML ="Tu as gagné la partie !";
  }

  else {
    document.getElementById("winner").innerHTML ="Tu as perdu la partie !";
  }


}
