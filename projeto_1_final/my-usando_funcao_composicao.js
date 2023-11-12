const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const functionExpectArray = fn.composicao(
    
    fn.elementosTerminadoCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementoSeIncluir("-->"),
    fn.removerElementoSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementoSeApenasNumero,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
    console.log
)

const resultRudece = functionExpectArray(fn.lerDiretorio(caminho))