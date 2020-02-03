function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // retorna '4'
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44)) // retorna '6', pega os dois primeiro números
console.log(area(5, 5)) //'valor acima do permitido 25m2. Undefined'
