/*Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti
e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.
*/
function filterOutOdds(...parameters){
    return parameters.filter(parameter=> parameter%2===0)
}
let result=filterOutOdds(1,2,3,4,5)
console.log(result