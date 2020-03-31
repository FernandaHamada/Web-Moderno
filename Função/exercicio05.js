/* 05) ​Lidar com números em JavaScript pode dar muita dor de cabeça. 
Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2);
O resultado será: 0.30000000000000004. 
Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. 
Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. 
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 
(observe a vírgula e o ponto).  
 */

 console.log(0.1 + 0.2) // '0.30000000000000004'
 console.log(parseFloat(0.1 + 0.2).toFixed(2)) // '0.30'  
 /*parseFloat() analisa um argumento string, e retorna um numero de ponto flutuante
  *Dessa forma, se ele encontrar uma carácter diferente de uma sinal ( + ou -), numeral (0 - 9), ou um expoente, ele retorna o valor 
  *até esse ponto.
  */
 // toFixed(x) mantém x números decimais.*/
 
  console.log(parseFloat(0.1 + 0.2).toFixed(2).replace('.', ',')) // '0,30'

  function valor(x, y){
      console.log("R$" + parseFloat(x, y).toFixed(2).replace(".", ','))
  }
  valor(0.1 + 0.2) // 'R$0,30'
