const primeiroElemento = arrayOrString => arrayOrString[0]
const letraMinuscula = letra => letra.toLowerCase() 

new Promise(resolve => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
