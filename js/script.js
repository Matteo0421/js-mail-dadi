const email = ['matteo1gmail', 'matteo2gmail', 'matteo3gmail', 'matteo4gmail', 'matteo5gmail'];
console.log(email);
const emailDaCercare = prompt('inserisci la tua mail?');
console.log(emailDaCercare);
let elementoPresente = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === emailDaCercare) {
        elementoPresente = true;
        break;
    }
}

if (elementoPresente) {
    console.log("L'elemento è presente nell'array.");
} else {
    console.log("L'elemento non è presente nell'array.");
}