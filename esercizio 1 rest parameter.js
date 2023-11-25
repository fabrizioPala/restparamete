/*Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma 
di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.*/
function somma(...parametri){
    return parametri.reduce((acc,parametro)=>acc+parametro,0);
}
let result= somma(1,2,3,4,5,6,7,)