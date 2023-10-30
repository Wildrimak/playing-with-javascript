const myFilter = function (fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {

        const element = this[i];

        if (fn(element, i, this)) {
            novoArray.push(element)
        }

    }

    return novoArray
}

Array.prototype.myFilter = myFilter

const elementosToFilter = [10, 8, 2, 10, 3, 10, 4, 1, 1, 9, 7, 6.9]

const elementosFiltrados = elementosToFilter.myFilter(elemento => elemento >= 7)

console.log(elementosFiltrados)