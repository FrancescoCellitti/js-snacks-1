const word1 = prompt('inserire una parola')
const word2 = prompt('inserire una seconda parola')
if (word1.length > word2.length) {
    console.log(word1, word2)
} else if (word2.length > word1.length) {
    console.log(word2, word1)
} else {
    console.log('le parole hanno la stessa lunghezza')
}