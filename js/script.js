// Ciao ragazzi, esercizio di oggi: calcolo del prezzo del biglietto del treno con form <br>
// cartella/repo **js-biglietto-treno-form**
// Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


var prezzoBase = 0.21;
var attiva = document.getElementById('genera');
var disattiva = document.getElementById('annulla');


attiva.addEventListener("click", function() {
    document.getElementById('nominativo').innerHTML = document.getElementById('nome').value;
    document.getElementById('carrozza').innerHTML = casuale(1, 9);
    document.getElementById('codice').innerHTML = casuale(90000, 99999);
    var km = document.getElementById('km').value;
    var scontistica = (document.getElementById('eta').value);
    var sconto = 0;
    var scrittaSconto = "Nessuno Sconto";
    if (scontistica == "over") {
        sconto = 40;
        scrittaSconto = "Sconto Over 65";
    } else if (scontistica == "min"){
        sconto = 20;
        scrittaSconto = "Sconto Minorennis";
    }
    document.getElementById('tipo-offerta').innerHTML = scrittaSconto;
    document.getElementById('costo').innerHTML = (prezzoBase / 100 * (100 - sconto)*km).toFixed(2);
    document.getElementById('sezione-bot').classList = "show"
});

disattiva.addEventListener("click", function() {
    document.getElementById('sezione-bot').classList = "hidden"
});










// FUNZIONI
function casuale(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
