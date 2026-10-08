/*
rendi l'esempio di pbkdf2 e modificalo così:
• il numero di calcoli da fare arriva come costante in cima al file (const NUMERO_CALCOLI = 8;);
• alla fine di ogni calcolo stampi il numero del calcolo e il tempo;
• quando tutti sono finiti, stampi una riga finale con il tempo totale. Suggerimento: tieni un contatore dei calcoli finiti e controlla nella callback quando arriva a NUMERO_CALCOLI.
Output atteso con 8 calcoli e pool da 4 (tempi indicativi):
Calcolo 1 finito dopo 181 ms
... (4 calcoli intorno a 180 ms, 4 intorno a 360 ms)
Tutti gli 8 calcoli finiti in 362 ms
*/

import crypto from "node:crypto";

const NUMERO_CALCOLI = 8
const oraPartenza = Date.now()
let finiti = 0

for(let i=1; i<=NUMERO_CALCOLI; i++){
    crypto.pbkdf2("password", "sale", 200000, 64, "sha512", (err, ris)=>{
        console.log(`Calcolo ${i} finito dopo ${Date.now() - oraPartenza} ms`);
        finiti++
        if(finiti === NUMERO_CALCOLI){
            console.log(`Tutti gli 8 calcoli finiti in ${Date.now()- oraPartenza} ms`);
        }
    })
}

console.log('Calcoli avviati, il thread principale è libero')