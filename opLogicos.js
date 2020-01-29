/* Tabela Verdade
 *
 * V e V => V
 * V e F => F
 * F e F => F
 * 
 * V ou ? => V
 * F ou ? => ?
 * F ou V => V
 * F ou F => F
 *
 * V xor V => F
 * V xor F => V
 * F xor V => V
 * F xor F => F
 * 
 * ! negação
 * 
 * !V => F
 * !F => V
 */


function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho2 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 =  trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel =  !comprarSorvete // operador unário

    return {
        comprarSorvete: comprarSorvete, 
        comprarTV50: comprarTV50, 
        comprarTV32: comprarTV32, 
        manterSaudavel: manterSaudavel}
}
console.log(compras(true, true)) /* {comprarSorvete: true, comprarTV50: true, comprarTV32: false, manterSaudavel: false} */
console.log(compras(true, false)) /* { comprarSorvete: true, comprarTV50: false, comprarTV32: true, manterSaudavel: false } */
console.log(compras(false, true)) /* { comprarSorvete: true, comprarTV50: true, comprarTV32: true, manterSaudavel: false } */ 
console.log(compras(false, false)) /* { comprarSorvete: false, comprarTV50: false, comprarTV32: false, manterSaudavel: true } */

