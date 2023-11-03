// Uma funcao pura é uma funcao em que o valor de retorno é determinado APENAS 
// por seus de entrada, sem efeitos colaterais observaveis

// Funcao pura ou impura?
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));