let listOfNumber = []
let listCube = []
let numeroComponentiLista= Number(prompt('inserisci il numero dei componenti lista'))
let numeroUtente = Number(prompt('inserisci il numero fin dove calcolare il cubo'))
for(i = 0; i<numeroComponentiLista; i++){
    let numero = Number(prompt('inserisci numeri'));
    listOfNumber.push(numero)
}
for(i=0; i<numeroUtente; i++){
    listCube.push(listOfNumber[i]**3)
}
console.log(listOfNumber)
console.log(listCube);
   

