let dobro = function(a){
    return 2 * a
}

// função arrow, função anônima
dobro = (a) => {
    return 2 * a 
}

// Retorno implícito
dobro = a => 2 * a // função de uma única linha, um único trabalho
console.log(dobro(Math.PI)) // '6.283185307179586'

let Ola = function() {
    return 'Olá'
}

Ola = () => 'Olá'
Ola = _ => "Olá" // função com um único parâmetro  _ 
console.log(Ola()) // 'Olá'
