const nome = "Rebeca"
const concatenacao = "olá " + nome + "!"

/* template string considera quebra de linha */
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // letra maiúscula
console.log(`Ei... ${up(`cuidado`)}!`)