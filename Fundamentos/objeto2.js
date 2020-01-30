console.log(typeof Object) // retorna 'function'
console.log(typeof new Object) // retorna 'object'

const cliente = function(){}
console.log(typeof cliente) // 'function'
console.log(typeof new cliente) // 'object'

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto) // 'function'
console.log(typeof new Produto()) // 'object'
