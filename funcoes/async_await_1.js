const esperarPor = (tempo = 2000) => new Promise(resolve => {
    setTimeout(() => resolve(), tempo)
})

// esperarPor(2000)
//     .then(() => console.log('Executando promisse... 1'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promisse... 2'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promisse... 3'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// isso vai retornar uma Promisse no qual o resolve tem o valor 20
async function retornarValorRapido() {
    return 20
}

const executar = async () => {

    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`);

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3

}

// async => transforma a funcao em uma promisse
// await => pega uma promisse (qualquer?) e resolve ela, retornando o valor direto

// executar().then(console.log)

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor);
}

executarDeVerdade()