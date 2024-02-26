const email = ['matteo1@gmail.com', 'matteo2@gmail.com', 'matteo3@gmail.com', 'matteo4@gmail.com', 'matteo5@gmail.com'];
console.log(email);
const emailDaCercare = prompt('inserisci la tua mail?');
console.log(emailDaCercare);
let elementoPresente = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === emailDaCercare) {
        elementoPresente = true;
    }
};

if (elementoPresente) {
    console.log("L'elemento è presente nell'array.");
} else {
    console.log("L'elemento non è presente nell'array.");
}

const numeroGiocatore =  Math.ceil(Math.random() * 6);
console.log(numeroGiocatore);

const numeroComputer =  Math.ceil(Math.random() * 6);
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer) {
  console.log('Hai vinto');
}else if(numeroGiocatore < numeroComputer) {
  console.log('Hai perso');
}else {
  console.log('Hai pareggiato');
};