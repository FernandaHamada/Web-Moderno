function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max , min] // inverte os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // retorna '40', '43'. valores entre 50 e 40
console.log(rand([992])) // '996', '998'
console.log(rand([, 10])) // '8'. valores entre 0 e 10
console.log(rand([])) // entre 0 e 1000
console.log(rand()) // undefined is not iterable (cannot read property Symbol(Symbol.iterator))
