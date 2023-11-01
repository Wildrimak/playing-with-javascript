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

const gravarArquivo = (caminho, conteudo) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(caminho, conteudo, (err) => {

            if (err) {

                console.error('Erro ao gravar o arquivo')
                reject(err)

            } else {

                console.log('Arquivo gravado com sucesso!')
                resolve(conteudo.toString())

            }

        })
    });
}

const printar24primeirasLinhas = linhas => {

    const texto = '\n\nINICIO\n\n'
        + 'LINHA 1: ' + linhas[0] + '\n'
        + 'LINHA 2: ' + linhas[1] + '\n'
        + 'LINHA 3: ' + linhas[2] + '\n'
        + 'LINHA 4: ' + linhas[3] + '\n'
        + 'LINHA 5: ' + linhas[4] + '\n'
        + 'LINHA 6: ' + linhas[5] + '\n'
        + 'LINHA 7: ' + linhas[6] + '\n'
        + 'LINHA 8: ' + linhas[7] + '\n'
        + 'LINHA 9: ' + linhas[8] + '\n'
        + 'LINHA 10: ' + linhas[9] + '\n'
        + 'LINHA 11: ' + linhas[10] + '\n'
        + 'LINHA 12: ' + linhas[11] + '\n'
        + 'LINHA 13: ' + linhas[12] + '\n'
        + 'LINHA 14: ' + linhas[13] + '\n'
        + 'LINHA 15: ' + linhas[14] + '\n'
        + 'LINHA 16: ' + linhas[15] + '\n'
        + 'LINHA 17: ' + linhas[16] + '\n'
        + 'LINHA 18: ' + linhas[17] + '\n'
        + 'LINHA 19: ' + linhas[18] + '\n'
        + 'LINHA 20: ' + linhas[19] + '\n'
        + 'LINHA 21: ' + linhas[20] + '\n'
        + 'LINHA 22: ' + linhas[21] + '\n'
        + 'LINHA 23: ' + linhas[22] + '\n'
        + 'LINHA 24: ' + linhas[23] + '\n'
        + '\nFIM\n'

    console.log(texto)

}


module.exports = {
    obterArquivosDeLegendasValidas, lerArquivo, gravarArquivo, printar24primeirasLinhas
}