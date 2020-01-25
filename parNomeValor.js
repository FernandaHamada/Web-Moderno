// par "nome/valor"
const saudacao = "Opa" // contexte léxico 1

function exec(){
    const saudacao = "Falaaa" // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua ...",
        numero: 123
    }
}

console.log(saudacao) // 'Opa'
console.log(exec()) // 'Falaaa'
console.log(cliente) /* retorna{
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { logradouro: 'Rua ...', numero: 123 }
  } */
  