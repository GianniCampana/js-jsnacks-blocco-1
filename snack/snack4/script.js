var elenco = ["gianni", "francesco", "antonio", "giovanni", "roberto"];

var nome_utente = prompt("qual è il tuo nome?");
var nome_presente = false;

for(var i = 0; i < elenco.length; i++){

    var elemento = elenco[i];
    if(elemento === nome_utente){
        nome_presente = true;
    } 
}

if(nome_presente){
    console.log("puoi entrare");
}else{
    console.log("non puoi entrare");
}