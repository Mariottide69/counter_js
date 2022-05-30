let counter = 0;

function addition() {
 counter++;
 document.getElementById('number').innerHTML = counter;
}

function subtraction() {
 if(counter != 0) {
  counter--;
 }
 document.getElementById('number').innerHTML = counter;
}

document.getElementById('plus').addEventListener("click", addition);

document.getElementById('minus').addEventListener('click', subtraction);