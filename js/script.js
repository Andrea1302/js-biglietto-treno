// Calcolo del prezzo del biglietto del treno

/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
*/

const elemento = document.getElementById("mio_id");

// Chiedere all utente quanti km deve percorrere 
let quantiKm = parseInt(prompt("Quanti km devi percorrere?"));
console.log(quantiKm);

// Chiedere all utente la sua età
let quantiAnni = parseInt(prompt("Quanti anni hai?"));

// Stabilire prezzo al km 
const prezzoAlKm = 0.21;
console.log("Il prezzo al km è di:",(prezzoAlKm), "€");

// Calcola il prezzo in base ai km inseriti dall utente ma senza sconto 
let prezzoBase = quantiKm * prezzoAlKm;
prezzoBase = prezzoBase.toFixed(2);
console.log(prezzoBase);
// inserire sconto per i minorenni
let scontoMinori = ( prezzoBase * 20 ) /100;
console.log(scontoMinori);

// inserire sconto per gli over 65
let scontoOver65 = ( prezzoBase * 40) /100;
console.log(scontoOver65);

// stabilire se all utente spetterà qualche sconto e Fare vedere al cliente quanto deve pagare 
if (quantiAnni < 18 ) {
let quantoPagaMinore = prezzoBase - scontoMinori;
quantoPagaMinore = quantoPagaMinore.toFixed(2);
console.log(quantoPagaMinore);
elemento.innerHTML = `Prezzo del Biglietto: ${quantoPagaMinore}€`;
} else if ( quantiAnni > 65 ) {
let quantoPagaOver65 = prezzoBase - scontoOver65;
quantoPagaOver65 = quantoPagaOver65.toFixed(2)
console.log(quantoPagaOver65);
elemento.innerHTML=  `Prezzo del Biglietto: ${quantoPagaOver65}€`;
} else {
    elemento.innerHTML= `Prezzo del Biglietto: ${prezzoBase}€`;
}





