const inizio = Date.now();

// Programmo un messaggio tra 100 millisecondi
setTimeout(() => {
  console.log(`Timeout eseguito dopo ${Date.now() - inizio} ms (dovevano essere 100)`);
}, 100);

// Ora blocco il thread principale per 2 secondi con un ciclo che non fa niente
console.log('Inizio il ciclo pesante...');
while (Date.now() - inizio < 2000) {
  // il cameriere è bloccato qui dentro
}
console.log('Ciclo finito');