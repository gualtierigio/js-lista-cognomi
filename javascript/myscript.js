/*
 * 
 * chiedi all’utente il cognome
 * inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 * 
 */

const listaCognomi = ["Bianchi", "Rossi", "Neri", "Verdi", "Gialli"];

const cognome = prompt("inserisci il tuo cognome");

const cognomeDefinitivo = cognome.charAt(0).toUpperCase() + cognome.slice(1);

const cognomeUtente = listaCognomi.push(cognomeDefinitivo);

listaCognomi.sort();

let index = 0;

for (let i = 0; i < listaCognomi.length; i++){

    index = index + 1;

    index + listaCognomi[i];

    console.log(index + listaCognomi[i])

}


