var numeri = [];

for(var i = 0; i < 6; i++){
    var numero_nuovo = parseInt(prompt("inserisci il " +(i+1)+ " numero"));
    if(numero_nuovo % 2 != 0){
        numeri.push(numero_nuovo);
    }
}

console.log(numeri);
