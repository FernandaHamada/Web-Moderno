let comparaComThis = function(param){
    console.log(this === param) 
}

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) /// false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false, mantém a arrow function
comparaComThisArrow(module.exports) // true, continua apontando para o objeto

/* THIS de uma função Arrow, é um this associado a um contexto,
 * no qual uma função foi escrita.
 *
 * Não tem variação mesmo com o BIND.
 */