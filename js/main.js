/***** pseudo ******/
function donnees() {
var pseudo= document.formulaire.text.value;

document.getElementById('result').innerHTML = "Bienvenue :" + " " + pseudo;
}

var gamePictures = document.getElementsByClassName("gamePicture");
for (i=0; i< gamePictures.length; i++) {
 gamePictures[i].onclick = function () {
 gamePictures[i].getAttribute("alt");
 alert();
 }
}
