// Unário : 1 operando, Binário: 2 operando, Ternário: 3 operando

const resultados = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultados(7.1)) // retorna "Aprovado"
console.log(resultados(6.7)) // retorna "Reprovado"

