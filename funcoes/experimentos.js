function primeiroExemplo() {


    function fn5() {
        console.log('timeout')
    }

    function fn4() {
        fn5()
    }

    function fn3() {
        setTimeout(() => fn4(), 3000)
        console.log('fn3')
    }

    function fn2() {
        fn3()
    }

    function fn1() {
        fn2()
    }

    function main() {
        fn1()
    }

    main()
    console.log('fim')

}

function segundoExemplo() {

    //function esperarPor(tempo) {
    //    const futuro = Date.now() + tempo
    //    while (Date.now() < futuro) {

//        }
 //   }

    setInterval(() => console.log("Another"), 400)
    //setTimeout(() => console.log('Exec #01'), 3)
   // setTimeout(() => {
        //esperarPor(3000)
     //   console.log('Exec #02')
    //}, 300)

    //esperarPor(5000)

    //const ponto1 = Date.now() 
    console.log('Fim!')
    //const ponto2 = Date.now()

    //const result = ponto2 - ponto1
    //console.log(result)

}


segundoExemplo()