/*12)​ Faça um algoritmo que calcule o fatorial de um número 
*/

function fatorial(numero){
    
    let fat = numero
    

    if (numero == 1 || numero == 0){
        return console.log("Fatorial de " + numero + " é 1.")
    }
    
    else {
        console.log("Fatorial de " + numero + " é: ")

            for (let i = numero - 1 ; i  > 1; i--){
                fat = fat * i
                
                
            }
            return console.log(fat)
    }
 }
       



fatorial(1)
fatorial(0)
fatorial(4)
fatorial(5)