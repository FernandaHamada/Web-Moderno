/* 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.  */

function numPares(){
    let i = 1
    while (i <= 100){
        if (i % 2 == 0){
            console.log(i)
        }
        i++
    }
}

numPares()