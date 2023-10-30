let a = 45
console.log(a);

// function declaration
function bomDia() {
    console.log('Bom dia');
}

bomDia()

// Function expression
const boaTarde = function () {
    console.log('Boa tarde');
}

boaTarde()

function somar(a=0, b=0) {
    return a + b
}

const normal = somar(2, 3)

const excesso = somar(2, 3, 4)

const apenas_um = somar(2)

const nenhum = somar()

console.log(normal)
console.log(excesso)
console.log(apenas_um)
console.log(nenhum)
