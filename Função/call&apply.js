/* A diferença entre Call e Apply 
é a forma que passa os parâmetros*/

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco + (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4598,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // 'R$ NaN'


global.preco = 20
global.desc = 0.1
console.log(getPreco()) // 'R$ 20.9'
console.log(produto.getPreco()) // 'R$ 4598.85'

const carro = {
    preco: 49990,
    desc: 0.20
}
console.log(getPreco.call(carro)) // 'R$ 49990.8'
console.log(getPreco.apply(carro)) // 'R$ 49990.8'


console.log(getPreco.call(carro, 0.17, '$')) // '$ 49990.936'
console.log(getPreco.apply(carro, [0.17, "$"])) // '$ 49990.936' dentro de um array