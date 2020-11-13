// NOTE: MAILING LIST
var mailingList = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "nonnapapera@alice.it", "paperino@virgilio.it, spiderman@mail.it"];
// NOTE: RICHIESTA MAIL ALL'UTENTE
var richiestaMail = prompt("Inserisci il tuo indirizzo e-mail");
console.log(richiestaMail);
// NOTE: innerHTML per ""Il tuo indirizzo e-mail è: " + richiestaMail;"
document.getElementById("mail").innerHTML = "Il tuo indirizzo e-mail è: " + richiestaMail;
// NOTE: VAR RESULT + FOR
var result = false;
for (var i = 0; i <mailingList.length; i = i + 1) {
  if (richiestaMail == mailingList [i]) {
    result = true;
  }
}
// NOTE: IF + ELSE
if (result === true) {
  document.getElementById("access").innerHTML = "Accesso consentito";
} else {
  document.getElementById("access").innerHTML = "Accesso non consentito";
}
