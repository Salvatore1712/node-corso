import crypto from "node:crypto"

const inizio = Date.now()

for (let i = 1; i<=5; i++){
    crypto.pbkdf2("password", "sale", 200_000, 64, "sha512", ()=>{
        console.log(`Calcolo ${i} finito dopo ${Date.now() - inizio} ms`);
    })
}
console.log('Ho fatto partire tutti i calcoli, il thread principale è libero');