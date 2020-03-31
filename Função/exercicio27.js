/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças
 e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e 
 em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */

function crescAnual(altura1, taxaCresc1, altura2, taxaCresc2){
    if(altura1 == altura2){
        if (taxaCresc1 > taxaCresc2) {
            return "A criança 1 irá ultrapassar a segunda criança em 1 ano."
        } else if (taxaCresc1 < taxaCresc2) {
            return "A criança 2 irá ultrapassar a segunda criança em 1 ano."
        } else{
            return "As duas crianças tem a mesma taxa de crescimento."
        }
    } else {
        if (altura1 > altura2) {
            if (taxaCresc1 >= taxaCresc2) {
                return "A segunda criança não irá ultrapassar a primeira criança."
            } else {
                return tempoDeCresc(altura2, taxaCresc2, altura1, taxaCresc1)
            }
        } else {
            if (taxaCresc2 >= taxaCresc1) {
                return "A primeira criança não irá ultrapassar a segunda criança."
            } else {
                return tempoDeCresc(altura1, taxaCresc1, altura2, taxaCresc2)
            }
        }
    }    

}


function tempoDeCresc(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let quantosAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        quantosAnos++
    }
    console.log(quantosAnos)
    return quantosAnos
}




console.log(crescAnual(150, 2, 130, 4))