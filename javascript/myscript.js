/*
 * 
 * chiedi all’utente il cognome
 * inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 * 
 */

let listaCognomi = ["Bianchi", "Rossi", "Neri", "Verdi", "Gialli"]

let cognomeUtente = listaCognomi.push(prompt("inserisci il tuo cognome"))

for (let i = 1; i < listaCognomi.length; i++){

    cognomeCorrente = listaCognomi[i];

}

console.log(listaCognomi.sort())
