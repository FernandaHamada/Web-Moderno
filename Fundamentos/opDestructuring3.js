function rand( { min = 0, max = 1000 } ){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj)) // retorna '45', '41'
console.log(rand({min: 995})) // '995'
console.log(rand({})) // retorna números aleatórios entre 0 e 1000
console.log(rand()) // 'Cannot destructure property `min` of 'undefined' or 'null''
