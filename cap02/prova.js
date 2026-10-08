console.log("Cartella da cui è partito il file", process.cwd());
console.log("Cartella dove sta questo file", import.meta.dirname);
console.log("Ciao");

// cap02/prova-saluto.js
// Uso: node cap02/prova-saluto.js Salvo 3

const [nome = 'sconosciuto', volteTesto = '1'] = process.argv.slice(2); // destructuring con valori di default
const volte = Number(volteTesto); // da stringa a numero

if (Number.isNaN(volte) || volte < 1) {
  console.error('Il secondo argomento deve essere un numero maggiore di 0');
  process.exit(1); // esco segnalando un errore
}

for (let i = 1; i <= volte; i++) {
  console.log(`${i}. Ciao ${nome}!`);
}