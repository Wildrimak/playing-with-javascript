// desafio: mapear para apenas nomes e mapear para o valor total

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const nomes = carrinho.map(elemento => elemento['nome'])
console.log(nomes)

const valoresTotais = carrinho.map(elemento => elemento['qtde'] * elemento['preco'])
console.log(valoresTotais);

// criando meu map

const myMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const resultado = fn(element, i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

Array.prototype.myMap = myMap

const outros = [1, 5, 10, 15]
const res = outros.myMap(e => e * 2)

console.log(res);


