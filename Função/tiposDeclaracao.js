console.log(soma(3, 4)) // '7'
console.log(sub(3,4)) // 'Cannot access 'sub' before initialization'
console.log(mult(3,4)) // 'Cannot access 'mult' before initialization'

/* Function Declaration: 
 * o interpretador do JS primeiro vai ler as funções e carregá-las, 
 * para depois executar.
 */
function soma(x, y){
    return x + y
}
 
// Function Expression: chamar a função depois que ela foi declarada
const sub = function(x, y){
    return x - y
}

// Named Function Expression: chamar a função depois que ela foi declarada
const mult = function mult(x, y){
    return x * y
}