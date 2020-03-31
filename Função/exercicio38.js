/* 38) ​Escreva uma função que receba dois parâmetros início e fim. 
Essa função deve imprimir todos os números ímpares que estão entre esses valores. 
Por padrão os valores devem ser 0 para início e 100 para fim. 
Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.  */

function numImp(valor1, valor2){

    let numImpar
   if (valor1 < valor2){
       while (valor1 < valor2){
           if (valor1 % 2){
               console.log(valor1)
           } 
           valor1++
       }
   } else{
       while (valor2 < valor1){
           if (valor2 % 2){
               console.log(valor2)
           }
           valor2++
       }
   }
}

numImp(100, 0)
numImp(0, 100)