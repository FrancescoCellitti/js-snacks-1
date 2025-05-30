let empty = [];
for(i = 0; i < 6; i++){
    let numero = Number(prompt('inserire un numero'))
    if(numero % 2 != 0){
        empty.push(numero)
    }
}
console.log(empty)