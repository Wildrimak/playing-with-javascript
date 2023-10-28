/*

1) tenho que conseguir fazer somar(3)(4)(5)

2) tenho que conseguir fazer calcular(10)(5)(fn) sendo fn:

    fn -> somar
    fn -> subtrair
    fn -> multiplicar
    fn -> dividir

*/

function somar(primeiroTermo) {
    return function (segundoTermo) {
        return function (terceiroTermo) {
            return primeiroTermo + segundoTermo + terceiroTermo;
        }
    }
}

console.log('Chamando funcao somar:');
const resultadoDeSeomar = somar(3)(4)(5)
console.log(resultadoDeSeomar);

function somaSimples(primeiroTermo, segundoTermo) {
    return primeiroTermo + segundoTermo;
}

function subtrair(primeiroTermo, segundoTermo) {
    return primeiroTermo - segundoTermo;
}

function multiplicar(primeiroTermo, segundoTermo) {
    return primeiroTermo * segundoTermo;
}

function dividir(primeiroTermo, segundoTermo) {
    return primeiroTermo / segundoTermo;
}

function calcular(primeiroTermo) {
    return function (segundoTermo) {
        return function (fnOperation) {
            return fnOperation(primeiroTermo, segundoTermo)
        }
    }
}

// Chamando calcular por etapas

console.log('Chamando calcular com primeiro termo: ');
const resultadoDeCalcular = calcular(10);
console.log(resultadoDeCalcular);

console.log('Chamando resultadoDecalcular com segundo termo: ');
const resultadoDeCalcularComSegundoTermo = resultadoDeCalcular(5);
console.log(resultadoDeCalcularComSegundoTermo);

console.log('Chamando resultadoDeCalcularComSegundoTermo com terceiro termo: ');
const resultadoDeCalcularComTerceiroTermoSoma = resultadoDeCalcularComSegundoTermo(somaSimples);
console.log(resultadoDeCalcularComTerceiroTermoSoma);

const resultadoDeCalcularComTerceiroTermoSubtrair = resultadoDeCalcularComSegundoTermo(subtrair);
console.log(resultadoDeCalcularComTerceiroTermoSubtrair);

const resultadoDeCalcularComTerceiroTermoMultiplicar = resultadoDeCalcularComSegundoTermo(multiplicar);
console.log(resultadoDeCalcularComTerceiroTermoMultiplicar);

const resultadoDeCalcularComTerceiroTermoDividir = resultadoDeCalcularComSegundoTermo(dividir);
console.log(resultadoDeCalcularComTerceiroTermoDividir);