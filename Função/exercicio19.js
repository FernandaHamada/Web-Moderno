/*O cardápio de uma lanchonete é o seguinte:
Implemente uma  função que receba como parâmetros o código do item pedido, 
a quantidade e calcule o valor a ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. 
Use o comando switch. Crie um caso default para produto não existente.
*/

function lanchonete(produto,quantidade){
    switch(produto){
        case 100:
            console.log("Cachorro Quente: " + quantidade + " x R$3,00");
            console.log("Total R$" + (quantidade * 3.00).toFixed(2).replace("." , ","));
            break;
        case 200:
            console.log("Hambúrguer Simples: " + quantidade + " x R$4,00");
            console.log("Total R$" + (quantidade * 4.00).toFixed(2).replace("." , ","));
            break;
        case 300:
            console.log("Cheeseburguer: " + quantidade + " x R$5,50");
            console.log("Total R$" + (quantidade * 5.50).toFixed(2).replace("." , ","));
            break;
        case 400:
            console.log("Bauru: " + quantidade + " x R$7,50");
            console.log("Total R$" + (quantidade * 7.50).toFixed(2).replace("." , ","));
            break; 
        case 500:
            console.log("Refrigerante: " + quantidade + " x R$3,50");
            console.log("Total R$" + (quantidade * 3.50).toFixed(2).replace("." , ","));
            break;  
        case 600:
            console.log("Suco: " + quantidade + " x R$2,80");
            console.log("Total R$" + (quantidade * 2.80).toFixed(2).replace("." , ","));
            break;               
        default:
            console.log("Produto não existente.");
            break;    
    }
}

lanchonete(100,2)
lanchonete(200,1)
lanchonete(300,2)
lanchonete(400,1)
lanchonete(500,3)
lanchonete(600,5)
lanchonete(600,10)