const [a] = [10]
console.log(a) // retorne '10'

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // '10 9 undefined 8'

const [, [, rota]] = [[, 8, 8], [9, 6 ,8]]
console.log(rota) // retorna '6', segundo valor
