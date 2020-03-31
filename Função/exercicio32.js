/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.  */

const vetor = [10, 10 , 10 ,10 , 10 , 10, 10 , 20]

function mediaAritmetica(vetor){
    let soma = 0
    let media = 0

    for (let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    media = soma / vetor.length

    return "A média Aritmética é: " + media
}

console.log(mediaAritmetica(vetor))