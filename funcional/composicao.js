function componha(fn1, fn2) {
    return function(valor) {
        return fn2(fn1(valor))
    }
}

const dizerOla = who => "Olá " + who
const dizerComportamento = who => who + " vá para o hotel!"
  
const dizOlaEComportamento = componha(dizerOla, dizerComportamento)
const r = dizOlaEComportamento("wildrimak")
console.log(r)

function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

const gritar = texto => texto.toUpperCase()

const saudeAjaGrite = composicao(dizerOla, dizerComportamento, gritar)

const result = saudeAjaGrite("Wild")

console.log(result);

// following

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento
)('PARA')

console.log(resultado);