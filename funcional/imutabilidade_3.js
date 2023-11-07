const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Feliz'
    })
})

// Atribuicao por Referencia
const outraPessoa = pessoa

// Passagem por Referencia (Funcao impura!)

function alteraPessoa(pessoa) {
    const novaPessoa = {...pessoa}
    pessoa.nome = 'João'
    pessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa);
console.log(novaPessoa);

let a = 3
let b = a // atribuicao por valor (copia!)

a++
b--

console.log(a, b);