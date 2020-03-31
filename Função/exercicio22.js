/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
A função recebe como parâmetro um inteiro que representa o mês 
(1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. 
Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 
*/

function anuidadeAssociacao(mes, valorAnuidade){
    switch(mes){
        case 1:
            console.log("Janeiro: R$" + (valorAnuidade* Math.pow(1 + 0.05, 1)).toFixed(2).replace(".", ","));
            break;
        case 2:
            console.log("Fevereiro: R$" + (valorAnuidade * Math.pow(1 + 0.05, 2)).toFixed(2).replace(".", ","));
            break; 
        case 3:
            console.log("Março: R$" + (valorAnuidade * Math.pow(1 + 0.05, 3)).toFixed(2).replace(".", ","));
            break;
        case 4:
            console.log("Abril: R$" + (valorAnuidade * Math.pow(1 + 0.05, 4)).toFixed(2).replace(".",","));
            break;
        case 5:
            console.log("Maio: R$" + (valorAnuidade * Math.pow(1 + 0.05, 5)).toFixed(2).replace(".",","));
            break;
        case 6:
            console.log("Junho: R$" + (valorAnuidade * Math.pow(1 + 0.05, 6)).toFixed(2).replace(".",","));
            break;
        case 7:
            console.log("Julho: R$" + (valorAnuidade * Math.pow(1 + 0.05, 7)).toFixed(2).replace(".",","));
            break;
        case 8:
            console.log("Agosto: R$" + (valorAnuidade * Math.pow(1 + 0.05, 8)).toFixed(2).replace(".",","));
            break;
        case 9:
            console.log("Setembro: R$" + (valorAnuidade * Math.pow(1 + 0.05, 9)).toFixed(2).replace(".",","));
            break;
        case 10:
            console.log("Outubro: R$" + (valorAnuidade * Math.pow(1 + 0.05, 10)). toFixed(2).replace(".",","));
            break;
        case 11:
            console.log("Novembro: R$" + (valorAnuidade * Math.pow(1 + 0.05, 11)).toFixed(2).replace(".", ","));
            break;
        case 12:
            console.log("Dezembro: R$" + (valorAnuidade * Math.pow(1 + 0.05, 12)).toFixed(2).replace(".",","));
            break;
        default:
            console.log("Mês inválido!");
            break;                    
            
    }
}

anuidadeAssociacao(1, 1000)
anuidadeAssociacao(2, 1000)
anuidadeAssociacao(5, 1000)
anuidadeAssociacao(10, 1000)
anuidadeAssociacao(3, 1000)