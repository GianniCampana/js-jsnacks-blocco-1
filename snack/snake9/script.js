
var somma = 0;
var media = 0;

for(i=0; i<=10; i++){
    
    somma += i;
    media = somma / i;
}


document.getElementById("somma").innerHTML= "la somma dei primi 10 numeri è " + somma;
document.getElementById("media").innerHTML= "la media dei primi 10 numeri è " + media;

