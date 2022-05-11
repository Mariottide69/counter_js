let contatore = 0;

function aggiungi() {
 contatore++;
 document.getElementById('number').innerHTML = contatore;
}

function sottrai() {
 if(contatore != 0) {
  contatore--;
 }
 document.getElementById('number').innerHTML = contatore;
}