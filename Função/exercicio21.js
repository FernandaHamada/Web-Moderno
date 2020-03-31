/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130 
 */

function tabelaConveniado(idade){
    

    if (idade < 10){
        console.log("Crianças menores de 10 anos pagam R$" + (100 + 80).toFixed(2).replace(".", ","))
    } else if (idade >= 10 || idade <= 30){
        console.log("Crianças e adultos entre 10 e 30 anos pagam R$" + (100+50).toFixed(2).replace(".", ","))
    } else if (idade >= 30 || idade <= 60){
        console.log("Adultos entre 30 e 60 anos pagam R$" + (100+95).toFixed(2).replace(".", ","))
    } else {
        console.log("Adultos acima de 60 anos pagam R$" + (100+130).toFixed(2).replace(".", ","))
    }
    return idade


}

tabelaConveniado(20)
tabelaConveniado(30)
tabelaConveniado(5)
tabelaConveniado(75)