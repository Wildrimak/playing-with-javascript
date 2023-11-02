const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            //console.log(Array.isArray(arquivos));
            //console.log(arquivos);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })

}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            let textSemSimbolos = el
            simbolos.forEach(simbolo => {
                textSemSimbolos = textSemSimbolos.split(simbolo).join('')
            });
            return textSemSimbolos
        })
    }
}

function elementosTerminadoCom(padrao) {
    return function (array) {
        return array.filter(el => el.endsWith(padrao))
    }
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    });
}

function removerElementosSeVazio(array) {
    return array.filter(el => el.trim())
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(lerArquivo))
}

function removerElementoSeIncluir(padraoTextual) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual))
    }

}

function removerElementoSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

const mesclarElementos = conteudos => conteudos.join(' ')

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

module.exports = {
    lerDiretorio,
    elementosTerminadoCom,
    lerArquivos,
    removerElementosSeVazio,
    removerElementoSeIncluir,
    removerElementoSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor
}