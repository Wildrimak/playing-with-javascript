const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo)
        })
    });
}

lerArquivo(caminho)
    .then(conteudo => conteudo.toString())
    .then(texto => texto.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
