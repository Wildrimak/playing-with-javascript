const fn = require('./funcoes')
const path = require('path')

async function getArrayArquivos() {

    const diretorio = '../legendas'

    console.log('Antes');
    const lista = await fn.obterArquivosDeLegendasValidas(diretorio)
        .then(objeto => objeto.arquivos.map(arquivo => path.join(objeto.diretorio, arquivo)))
        .then(files => files.filter(arquivo => arquivo.endsWith('.srt')))
        .then(legendas => legendas.map(legenda => fn.lerArquivo(legenda)))
        .then(promises => Promise.all(promises))
        .then(console.log)

    console.log('Após');
    console.log(lista)

    return lista

}

getArrayArquivos()