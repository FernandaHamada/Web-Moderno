/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, 
conta quantos números negativos há nesse vetor e imprime a quantidade no console. */

const vetor = [1, -2, 3, -4, 5, 6, 10, -9, -7]

function numeroNegativo(vetor){
    let negativo = 0;

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 1){
             negativo = negativo + 1
        }
    } return negativo
}

console.log(numeroNegativo(vetor))