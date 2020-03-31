/* 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.  */

const numerosInteiros = [1 ,2 ,4 ,3 ,25 ,5 ,1 ,2 ,24]

function leituraNumeros(numerosInteiros){
    let maiorValor = numerosInteiros[0]
    let menorValor = numerosInteiros[0]

    for (let i = 0; i < numerosInteiros.length; i++){
        if (numerosInteiros[i] > maiorValor){
            maiorValor = numerosInteiros[i]
            
        } else if(numerosInteiros[i] < menorValor){
            menorValor = numerosInteiros[i]
            
        }
        
    }  return [maiorValor, menorValor]
}

console.log(leituraNumeros(numerosInteiros))