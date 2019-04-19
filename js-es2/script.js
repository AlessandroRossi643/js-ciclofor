var lancio1p1= Math.floor(Math.random()*6)+1;
var lancio2p1= Math.floor(Math.random()*6)+1;
player1score = lancio1p1+lancio2p1;
document.getElementById("player1l1").innerHTML=lancio1p1;
document.getElementById("player1l2").innerHTML=lancio2p1;
document.getElementById("player1").innerHTML=player1score;

var lancio1p2= Math.floor(Math.random()*6)+1;
var lancio2p2= Math.floor(Math.random()*6)+1;
player2score = lancio1p2+lancio2p2;
document.getElementById("player2l1").innerHTML=lancio1p2;
document.getElementById("player2l2").innerHTML=lancio2p2;
document.getElementById("player2").innerHTML=player2score;

if (player1score>player2score) {
  document.getElementById("result").innerHTML="Complimenti Player1, hai vinto!";
}
if (player1score==player2score) {
  document.getElementById("result").innerHTML="Totale equilibrio, Pareggio!";
}
if(player2score>player1score){
  document.getElementById("result").innerHTML="Complimenti Player2, hai vinto!";
}
