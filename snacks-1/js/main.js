//l'utente inserisce due numeri in successione con due prompt, il software stampa il maggiore.
const number1 = Number(prompt('inserire un numero'))
const number2 = Number(prompt('inserire un secondo numero'))
if (number1 > number2) {
    console.log(number1);
} else if(number2>number1){
    console.log(number2);
}else {
    console.log('i numeri so uguali');
}
