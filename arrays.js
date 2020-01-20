// o índice começa com o valor 0
const valores = [7.7, 8.9 , 6.3 , 9.2] // vírgula é o separador dos elementos
console.log(valores[0], valores[3]) // [] são índices
console.log(valores[4]) // retorna UNDEFINED , valor indefinido

valores[4] = 10
console.log(valores[4])
console.log(valores.length) // quantidade de valores, os índices '5'

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// arrays com tipos de dados homogêneo, não misturar dados

console.log(valores.pop()) // retorna último valor 'teste'
delete valores[0]
console.log(valores)

console.log(typeof valores) // retorna object