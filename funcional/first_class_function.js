// Diz-se que uma linguagem de programacao possui
// funcoes de primeira classe quando funcoes nessa 
// linguagem sao tratadas como qualquer outra variavel.

const x = 3
const y = function(txt) {
    return `Esse é o texto: ${txt}`;
}
const z = () => console.log('Zzzzzzz!');

console.log(x)
console.log(y('Olá'))
z()