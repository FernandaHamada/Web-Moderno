let valor // não inicializado
console.log(valor) // undefined

valor = null // null ausência de valor, não aponta para nenhum obj na memória
console.log(valor)

/* use null caso queira zerar o valor de uma variável */

// console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // undefined. Preço não está definido dentro do produto
console.log(produto) // retorna '{}'

produto.preco = 3.50
console.log(produto) // { preco: 3.5 }

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // retorna false
//delete produto.preco
console.log(produto) // { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto) // {preco: null}

