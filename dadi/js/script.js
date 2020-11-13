// NOTE: VARIABILE DADO GIOCATORE
var dadoGiocatore = Math.floor(Math.random() * 6) + 1;
document.getElementById("giocatore").innerHTML = dadoGiocatore;
console.log(dadoGiocatore);
// NOTE: VARIABILE DADO COMPUTER
var dadoComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById("computer").innerHTML = dadoComputer;
console.log(dadoComputer);
// NOTE: IF + ELSE
if (dadoGiocatore > dadoComputer) {
  document.getElementById("risultato").innerHTML = "Hai vinto!!";
} else if (dadoGiocatore < dadoComputer) {
  document.getElementById("risultato").innerHTML = "Hai perso!!";
} else {
  document.getElementById("risultato").innerHTML = "Parità";
}
