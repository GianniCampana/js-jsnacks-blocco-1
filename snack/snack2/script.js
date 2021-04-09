var parola_utente1 = prompt("inserisci la prima parola");
var parola_utente2 = prompt("inserisci la seconda parola");

if (parola_utente1.length == parola_utente2.length){
    alert("le parole sono di uguali dimensioni")
}else if (parola_utente1.length < parola_utente2.length){
    console.log(parola_utente1 + " "+ parola_utente2)
}else {
    console.log(parola_utente2 + " "+ parola_utente1)
}


   