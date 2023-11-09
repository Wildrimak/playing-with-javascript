// Closure é quando uma funcao "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo lexico

const fora = require('./closure_escopo')

const x = 1000
console.log(fora()); 