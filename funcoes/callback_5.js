const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

Array.prototype.meu_reduce = function (callback_function, acumulador) {

    //console.log("INICIO DA FUNCAO")
    if (this.length == 0 && acumulador == null) {
        throw new TypeError("Meu Reduce of empty array with no initial value");
    } else if (this.length == 0 && acumulador != null) {
        return acumulador;
    }

    //console.log("SEGUNDO IF")
    if (this.length == 1 && acumulador == null) {
        return this[0];
    } else if (this.length == 1 && acumulador != null) {
        return callback_function(acumulador, this[0], 0, this)
    }

    let novo_array;

    //console.log("TERCEIRO IF")
    if (acumulador == null) {
        novo_array = this;
    } else {
        novo_array = [acumulador, ...this]
    }

    //console.log("Antes da callback function com array com mais de dois elementos e acumulador ", acumulador)
    //console.log(this)
    //console.log(novo_array)
    let acumuladorFinal = callback_function(novo_array[0], novo_array[1], 0, this);

    //console.log("QUARTO IF")
    if (this.length == 2 && acumulador == null) {
        return acumuladorFinal;
    }

    //console.log("ACUMULADOR ANTES DO FOR: " + acumuladorFinal)
    //console.log("INICIO DO FOR")
    for (let i = 2; i < novo_array.length; i++) {

        let index;

        if (acumulador == null) {
            index = i
        } else {
            index = i - 1
        }

        const element = novo_array[i]

        //console.log("antes de atualizar acumulador: ", acumuladorFinal, element)
        acumuladorFinal = callback_function(acumuladorFinal, element, index, this)
        //console.log("após atualizar acumulador: ", acumuladorFinal)

    }

    return acumuladorFinal

}

const valorTotal = carrinho
    .map(elemento => elemento.qtde * elemento.preco)
    .reduce((acc, element) => acc + element, 1000)

console.log("Valor com reduce tradicional: ")
console.log(valorTotal)

const valorTotalMeuReduce = carrinho
    .map(elemento => elemento.qtde * elemento.preco)
    .meu_reduce((acc, element) => acc + element, 1000)

console.log("Valor com meu reduce: ")
console.log(valorTotalMeuReduce)


// testes manuais
console.log("INICIANDO TESTES\n\n");

const arr = [1, 2, 3, 4, 5];

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function concatena(a, b) {
  return a.toString() + b.toString();
}

// Teste com valor inicial
console.log(arr.meu_reduce(soma, 0)); // Deve imprimir 15
console.log(arr.meu_reduce(subtracao, 0)); // Deve imprimir -15
console.log(arr.meu_reduce(multiplicacao, 1)); // Deve imprimir 120
console.log(arr.meu_reduce(concatena, "")); // Deve imprimir "12345"

// Teste sem valor inicial
console.log(arr.meu_reduce(soma)); // Deve imprimir 15
console.log(arr.meu_reduce(subtracao)); // Deve imprimir -13
console.log(arr.meu_reduce(multiplicacao)); // Deve imprimir 120
console.log(arr.meu_reduce(concatena)); // Deve imprimir "12345"

// Teste com array vazio sem valor inicial (deve lançar um erro)
const arrVazio = [];
try {
  arrVazio.meu_reduce(soma);
} catch (error) {
  console.error("Erro esperado:", error.message);
}

// Teste com array vazio e valor inicial
console.log(arrVazio.meu_reduce(soma, 10)); // Deve imprimir 10