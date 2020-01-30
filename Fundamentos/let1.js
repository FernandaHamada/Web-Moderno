var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // retorna 'dentro = 2'
}
console.log('fora =', numero) // retorna 'fora = 1'


var numero = 1
{
    let numero2 = 2
    /*retorna 'dentro = 1', 
      procurou no escopo interno 'numero' e não encontrou, 
      passa a procurar no escopo mais abrangente */
    console.log('dentro =', numero) 
}
console.log('fora =', numero) // retorna 'fora = 1'


// não haverá conflito, pois LET tem um escopo mais abrangente
let numero = 1 
{
    let numero = 2
    console.log('dentro =', numero) // retorna 'dentro = 2'
}
console.log('fora =', numero) // retorna 'fora = 1'

// LET tem escopo global, de função e de bloco.