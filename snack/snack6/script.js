var numero_utente =parseInt(prompt("inserisci un numero"));

var somma = 0;

for(var i = 1; i<=numero_utente; i++){
    console.log(i)
    console.log(math.pow(i,3))
    console.log("-----------")
    somma += Math.pow(i,3);
}


console.log("la somma dei cubi è " + somma);