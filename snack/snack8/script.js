var numero = parseInt(prompt("inserisci un numero di 4 cifre"));

var somma_delle_cifre = 0;

while(numero > 0){
    cifre = numero % 10;
    somma_delle_cifre += cifre;
    numero = (numero - cifre) /10;
}
document.getElementById("somma").innerHTML="la somma delle cifre del tuo numero è " + somma_delle_cifre;