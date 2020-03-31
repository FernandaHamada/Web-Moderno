/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" 
se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
Repita a operação até que o código lido seja negativo. 
*/

function mediaNota(nota1, nota2, nota3){
    
    if (nota1 > nota2 && nota1 > nota3){
        media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    } else if (nota2 > nota1 && nota2 > nota3){
        media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
    } else{
       media = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10
    }

    if (media >= 5){
        console.log("Aluno APROVADO com média: " + media)
    } else{
        console.log("Aluno REPROVADO com média: " + media)
    }
}

mediaNota(10,10,10)
mediaNota(5,5,5)
mediaNota(6,4,7)
mediaNota(5,5,4)