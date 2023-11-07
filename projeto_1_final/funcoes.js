const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho)
                .map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })

}

function removerSimbolos(simbolos) {
    return function (array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
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
    return function (texto) {
        return texto.split(simbolo)
    }
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem === 'asc' ? asc : desc)

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
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumerico
}