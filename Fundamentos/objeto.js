const prod1 = {} // par de chaves representa um obj. de forma literal
prod1.nome = "Celular ultra Mega" // um objeto pode ter outro obj dentro dele. São uma coleção de chave e valor
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 // evitar atributos com espaço

console.log(prod1) // retorna = { nome: 'Celular ultra Mega', preco: 4998.9 }

const prod2 = {
    nome:"Camisa Polo",
    preco: 79.90
}

console.log(prod2)

// '{"nome":"Camisa Polo", "preco": 79.90}' = JSON (JavaScript Object Notation)
