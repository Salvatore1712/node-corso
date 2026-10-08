/*
Scrivi un programma che stampa una scheda dell'ambiente usando process. 
Deve stampare: la versione di Node (process.version), il sistema operativo (process.platform), 
l'architettura del processore (process.arch), il PID del processo (process.pid) e la cartella da cui l'hai lanciato (process.cwd()).
*/

console.log("Versione", process.version);
console.log("Sistema Operativo", process.platform);
console.log("Architettura processore", process.arch);
console.log("PID Percorso", process.pid);
console.log("Cartella lancio app", process.cwd());


