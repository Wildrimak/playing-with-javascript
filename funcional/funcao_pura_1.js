// Uma funcao pura é uma funcao em que o valor de retorno é determinado APENAS 
// por seus de entrada, sem efeitos colaterais observaveis

// const PI = 3.141552

// impura PI é um valor externo (ou eu dependo de algo estável, mas que nao ta no controle da funcao)
function areaCirculo(raio) {
    return raio * raio * Math.PI // estável
}

console.log(areaCirculo(10));
console.log(areaCirculo(10));
console.log(areaCirculo(10));


// Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14));
console.log(areaCircPura(10, 3.141592));
console.log(areaCircPura(10, Math.PI));

