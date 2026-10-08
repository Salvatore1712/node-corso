/*
Esercizio 1.3 🟡 — File cap01/es03-ritardo.js
Scrivi un programma che:
1. salva l'ora di inizio con Date.now();
2. programma un setTimeout da 0 millisecondi che stampa dopo quanti millisecondi è partito davvero;
3. subito dopo esegue un ciclo for che conta da 0 a un miliardo (1_000_000_000) senza fare niente dentro;
4. alla fine del ciclo stampa quanto tempo è durato il ciclo.
Output atteso (i numeri dipendono dal computer):
Ciclo finito in 412 ms
Timeout da 0 ms partito dopo 413 ms
*/

const oraInizio = Date.now()

setTimeout(()=> {
    console.log(`Timeout da 0 ms partito dopo ${Date.now() - oraInizio} ms`);
}, 0)

for (let i = 0; i<=1000000000; i++){

}
console.log(`Ciclo finito in ${Date.now() - oraInizio} ms`);

// Il setTimeout non viene eseguito subito: viene passato al timer (la cucina)
// e il thread principale (il cameriere) va avanti. Il timer scade quasi subito,
// ma il thread principale è bloccato nel ciclo for (si è messo a cucinare la lasagna).
// La callback può partire solo quando il ciclo finisce, per questo il timeout
// "da 0 ms" parte dopo circa 277 ms, subito dopo la fine del ciclo.