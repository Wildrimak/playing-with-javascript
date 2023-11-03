// Uma funcao pura é uma funcao em que o valor de retorno é determinado APENAS 
// por seus de entrada, sem efeitos colaterais observaveis

let qtdeDeExecucoes = 0

// Funcao Pura!
function somar(a, b) {
    qtdeDeExecucoes++ // efeitos colaterais observaveis (tornado-a impura)
    return a + b
}

console.log(qtdeDeExecucoes);
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(qtdeDeExecucoes);