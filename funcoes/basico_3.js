// arrow function

const saudacao = () => console.log('Hi Wildrimak!');
saudacao()

const saudacaoComParametroExplicito = (fulano) => "Fala " + fulano + ", blz!?"
console.log(saudacaoComParametroExplicito('Wildrimak'));

const saudacaoComParametroImplicito = fulano => "Fala " + fulano + ", blz!?"
console.log(saudacaoComParametroImplicito('Luiza'));


const saudacaoDiferente = fulano => `Fala ${fulano}, blz!?`
console.log(saudacaoDiferente('Julia'));

const somar = numeros => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([10, 20, 30, 40])); 

const somar2 = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar2(10, 20, 30)); 


const potencia = base => exp => Math.pow(base, exp)

const base2 = potencia(2)
const resultado = base2(10)

console.log(resultado);
console.log(potencia(2)(20))

// curiosidade sobre o this

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

// nao funciona, nao pode ser uma arrow functoin, tem que ser uma function declaration como acima
Array.prototype.primeiro = () => console.log(this[0])

const numeros = [-90, 1, 10, 1000, 50]

numeros.ultimo()
numeros.primeiro()