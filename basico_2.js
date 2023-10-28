function bomDia() {
    console.log('Bom dia');
}

const boaTarde = function naoSouAnonima() {
    console.log('Boa tarde');
}


// function executarQualquerCoisa(fn) {
//     fn()
// }

// 3() -> 3 is not a function
// executarQualquerCoisa(3) -> fn is not a function

// 1) passando funcao para uma funcao
function executarQualquerCoisa(fn) {
    console.log(fn);
    if (typeof fn == 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma funcao a partir de outra funcao

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const elevar = potencia(2)
console.log(elevar);

const resultado = elevar(10)
console.log(resultado);

// outra forma de chamar

const resultado2 = potencia(3)(4)

console.log(resultado2);