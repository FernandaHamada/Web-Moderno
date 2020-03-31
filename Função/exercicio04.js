/*04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores*/

function divisao(dividendo, divisor){
    console.log("Resultado: " + Math.floor(dividendo / divisor)) // A função Math.floor() retornará um valor inteiro, ao inves de quebrado.
    console.log("Resto: " + (dividendo% divisor))
}
    
divisao(11,4)
/* Sem Math.floor() retornará '2.75'
 * Com retorna um valor inteiro '2'
 */








