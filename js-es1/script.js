var email=["email1","email2","email3","email4","email5"];
var emailutente=prompt("Inserisci email");
for (var i = 0; i < email.length; i++) {
  if (emailutente==email[i]) {
    document.getElementById("authorized").innerHTML="Accesso Autorizzato";
  }
}
