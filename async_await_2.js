const gerarNumerosEntre = (min, max, numerosProibidos) => {

    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {

        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }

    })
}

// em funcoes async return o resultado é equivalente a fazer um resolve na Promise
// em funcoes async o conteudo de um throw em um catch é equivalente a fazer um reject na Promise
async function gerarMegaSena(quantidadeDeNumeros, tentativas = 1) {

    try {

        const numeros = []

        for (let _ of Array(quantidadeDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }

        return numeros

    } catch (error) {

        if (tentativas > 1000) {
            throw "Nao deu certo!"
        } else {
            return  gerarMegaSena(quantidadeDeNumeros, tentativas + 1)
        }

    }

}

gerarMegaSena(25)
    .then(resultado => console.log("then: ", resultado))
    .catch(error => console.log("catch: ", error))

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)