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
    document.getElementById("jeu").src ="img/pierre.png"
    // document.getElementById("jeu").style.transform = "translateY(-30px)";
    setTimeout(function(){document.getElementById("jeu").style.transform = "translateY(-110px)";
},1000);
  }
  else if (computer === 2) {
    computer="feuille";
    document.getElementById("jeu").src ="img/feuille.png"
    // document.getElementById("jeu").style.transform = "translateY(-30px)";
    setTimeout(function(){document.getElementById("jeu").style.transform = "translateY(-110px)";
  },1000);
  }
  else {
    computer="ciseaux";
    document.getElementById("jeu").src ="img/ciseaux.png"
    // document.getElementById("jeu").style.transform = "translateY(-30px)";
    setTimeout(function(){document.getElementById("jeu").style.transform = "translateY(-110px)";
  },1000);
  }


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
    document.getElementById("winner").innerHTML ="Tu as perdu la partie!";
  }

}
