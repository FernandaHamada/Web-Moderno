const prod1 = {
    nome: "...",
    preco: 45
}

const prod2 = {
    nome: "...",
    preco: 1234
}

/* Factory(fabrica) é uma função que no final retornar um objeto,
 * retorna uma novo objeto
 */

// Factory simples
function criarPessoa(){
    return{
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa()) // '{ nome: 'Ana', sobrenome: 'Silva' }'

