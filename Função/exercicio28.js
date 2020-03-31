/* 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
const numerosInteiros = [10,2,30,40,55,67,78,89,90,10,11,12,13,14,15,16,17,18,19,20]
// variável LET retorna undefined. Const garante sua inicialização com determinado valor 

function lerNumeros(){
    let i = 0
    let numeroPar = 0;
    let numeroImpar = 0;
    while (i <= numerosInteiros.length){
        if (numerosInteiros[i] % 2 == 0){
            numeroPar = numeroPar + 1
        }else{
            numeroImpar = numeroImpar + 1
        }
        i++
    }
    return console.log("São " + numeroImpar + " número(s) ímpar e " + numeroPar + " número(s) par")
    
}

lerNumeros()