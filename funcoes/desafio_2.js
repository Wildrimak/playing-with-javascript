const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// 1. trazer todos os elementos com fragil true
// 2. pegar os totais de cada elemento
// 3. media totais 

const frageis = carrinho
    .filter(item => item.fragil)

console.log(frageis)

const totais = frageis
    .map(elemento => elemento.qtde * elemento.preco)

console.log(totais);

const mediaTotal = totais
    .reduce((acc, element) => {

        const quantidade = acc.qtde + 1
        const novoTotal = acc.total + element

        return {
            qtde: quantidade,
            total: novoTotal,
            media: novoTotal / quantidade
        }
        
    }, { qtde: 0, total: 0, media: 0 }).media

console.log(mediaTotal);