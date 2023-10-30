const fs = require('fs')



const obterArquivosDeLegendasValidas = (diretorio) => {

    return new Promise((resolve, reject) => {

        fs.readdir(diretorio, (err, files) => {

            if (err) {
                console.error('Erro ao ler o diretório', err)
                reject(err)
            }

            resolve({
                'arquivos': files,
                'diretorio': diretorio
            })

        })

    });
}

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    });
}

module.exports = {
    obterArquivosDeLegendasValidas, lerArquivo
}