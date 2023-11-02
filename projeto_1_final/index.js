const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

function agruparPlavras(palavras) {
    return palavras.reduce((acc, palavra) => {
        const p = palavra.toLowerCase()
        const qtde = acc[p] ? acc[p].qtde + 1 : 1
        acc[p] = { elemento: p, qtde }
        return acc
    }, {})
}

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadoCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementoSeIncluir("-->"))
    .then(fn.removerElementoSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementoSeApenasNumero)
    .then(agruparPlavras)
    .then(console.log)  