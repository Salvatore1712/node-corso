/*
Scrivi una funzione doveSono() che restituisce la stringa 'browser' se esiste window, 'node' se esiste process, e 'boh' altrimenti. 
Usa typeof per controllare, così non hai errori se la variabile non esiste. Stampa il risultato.
*/

function doveSono(){
    if(typeof window !== "undefined"){
        console.log("Sono nel browser");
    } else if(typeof process === "object"){
        console.log("Sono in node");
    } else {
        console.log("Boh");
    }
}
doveSono()