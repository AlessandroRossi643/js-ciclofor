var lancio1p1= Math.floor(Math.random()*6)+1;
var lancio2p1= Math.floor(Math.random()*6)+1;
player1score = lancio1p1+lancio2p1;
document.writeln(player1score);

var lancio1p2= Math.floor(Math.random()*6)+1;
var lancio2p2= Math.floor(Math.random()*6)+1;
player2score = lancio1p2+lancio2p2;
document.writeln(player2score);

if (player1score>player2score) {
  document.writeln("Complimenti Player1, hai vinto!");
}
if (player1score==player2score) {
  document.writeln("Totale equilibrio, Pareggio!");
}
if(player2score>player1score){
  document.writeln("Complimenti Player2, hai vinto!");
}
