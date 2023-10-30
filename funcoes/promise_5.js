const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {

        try {
            
            // simulando um erro
            //con.log('temp')

            if (Math.random() < chanceErro) {
            
                // aqui representa um erro de um evento principal
                reject('Ocorreu um erro!')
            
            } else {
                resolve(valor)
            }

        } catch(e) {
            reject(e)
        }

    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(resultado => {
        console.log(resultado)
        console.log('Quando ocorre um erro, nenhum then é executado, apenas o primeiro catch irá resolver');
        return resultado
    })
    .then(
        v => console.log('Quando um erro geral ocorre o erro abaixo é tratado e o catch é ignorado: ', v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    // quando ocorre um erro acima, nao ha mais parametro que possa ser usado
    .then(() => console.log('Quase Fim!'))
    // o catch geralmente é a ultima coisa a ser chamada
    .catch(err => console.log(`Erro Geral: ${err}`))
    // apos o catch nao ha mas o retorno que possa ser usado pelas funcoes then
    .then(() => console.log('Fim'))