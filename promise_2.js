setTimeout(() => {
    console.log('Executando callback...')

    setTimeout(() => {
        console.log('Inner');

        setTimeout(() => {
            console.log('Inner Inner');
        }, 4000)
    }, 3000)
}, 2000)

const esperarPor = (tempo = 2000) => new Promise(resolve => {
    setTimeout(() => {
        console.log('Executando promisse...');
        resolve()
    }, tempo)
})

esperarPor(1000)
    .then(() => esperarPor(4000))
    .then(esperarPor)