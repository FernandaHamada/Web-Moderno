let isAtivo = false
console.log(isAtivo)

// let para alterar variável

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! dupla negação, uma cancela a outra. Retorna ao valor original

console.log("os verdadeiros... ")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos... ")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar... ")
console.log(!!("" || null || 0 || " ")) //  retorna true

let nome = ""
console.log(nome || "Desconhecido") // o primeiro valor nome deu falso, retornou o seg. valor

