{ 
    { 
        { 
            {
                var sera = "Será????"
            } 
        } 
    } 
}
console.log(sera)
// ficará visível fora do bloco de código, não sendo uma function

function teste(){
    var local = 123
}

teste()
console.log(local) // não estará visível fora da function

/* Variável tem dois escopos possíveis, 
 *são eles: global(visível p/ todos) ou Função 
 */