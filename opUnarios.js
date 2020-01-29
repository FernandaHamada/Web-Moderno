let num1 = 1
let num2 = 2

num1++ // 1 + 1
console.log(num1) // retorna '2'
--num1 // 2 - 1  '--num1' Tem uma prioridade maior que 'num1++'
console.log(num1) // retorna '1'
 
console.log(++num1 === num2--) // true
console.log(num1 === num2) // false
