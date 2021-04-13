var limite = 1000;
var potenza = 1;
var contatore_potenza = 1;

while(potenza < limite){
    potenza = Math.pow(2, contatore_potenza);
    console.log(potenza);
    contatore_potenza++;
}



