// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // '5'
imprimirSoma(2) // pode passar apenas um valor, porém retorna 'NaN'
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // resultado '5', ignora os demais números
imprimirSoma() // 'NaN' Not a Number


// Função com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3)) // retorna '5'
console.log(soma(2)) // retorna '2', (a = 2) e (b = 0)
console.log(soma()) // NaN
