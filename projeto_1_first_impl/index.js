const fn = require('./funcoes')
const path = require('path')


function getArrayArquivos() {

    const diretorio = path.join('..', 'dados', 'legendas')
    const pathResultado = './resultado.json'

    console.time("Time")
    fn.obterArquivosDeLegendasValidas(diretorio)
        .then(objeto => objeto.arquivos.map(arquivo => path.join(objeto.diretorio, arquivo)))
        .then(files => files.filter(arquivo => arquivo.endsWith('.srt')))
        .then(legendas => legendas.map(legenda => fn.lerArquivo(legenda)))
        .then(promises => Promise.all(promises))
        .then(legendasAbertas => legendasAbertas.map(legendaAberta => legendaAberta.split('\n')))
        .then(arrayLinhas => [].concat(...arrayLinhas))
        .then(linhas => linhas.filter(linha => linha.trim() !== ''))
        .then(linhas => linhas.filter(linha => !linha.match(/^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/)))
        .then(linhas => linhas.filter(linha => !linha.match(/^\d+\s*$/)))
        .then(linhas => linhas.map(linha => linha.replace(/<[^>]*>/g, '')))
        .then(linhas => linhas.map(linha => linha.replace(/[.,!<>\[\]\/\\?"-]+/g, '')))
        .then(linhas => linhas.map(linha => linha.trim()))
        .then(linhas => linhas.map(linha => linha.split(' ')))
        .then(arrayPalavras => [].concat(...arrayPalavras))
        .then(palavras => palavras.reduce((acumulador, word) => {

            if (acumulador[word]) {
                acumulador[word] += 1
            } else {
                acumulador[word] = 1
            }

            return acumulador

        }, {}))
        .then(objeto => Object.entries(objeto))
        .then(matrizPalavras => matrizPalavras.sort((a, b) => b[1] - a[1]))
        .then(matrizPalavrasOrdenadas => matrizPalavrasOrdenadas.reduce((acumulador, matriz) => {

            const [word, contagem] = matriz

            acumulador.push({
                palavra: word,
                quantidade: contagem
            })
            
            return acumulador

        }, []))
        .then(objetoFinal => {
            const conteudo = JSON.stringify(objetoFinal)
            fn.gravarArquivo(pathResultado, conteudo)
        })
        .then(() => console.log('Operacao Finalizada!'))

    console.timeEnd("Time")

}

getArrayArquivos()