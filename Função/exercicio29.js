/* 29) ​Utilizando a estrutura de repetição for, 
faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] 
(repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, 
escrevendo estas informações.*/

const contadoDeNumeros = [5,10,11,12,16,19,20,21,22]

function leituraDeNumeros(){
    let qtdNumeros = 0

    for (let i = 0; i < contadoDeNumeros.length; i++){
        if (contadoDeNumeros[i] >= 10 && contadoDeNumeros[i] <= 20){
            qtdNumeros = qtdNumeros + 1
        }

    } 
    return console.log("O total de números entre [10,20] são: " + qtdNumeros)
}

leituraDeNumeros()