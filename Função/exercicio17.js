/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário 
e calcula e imprime o seu novo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

function planoSalario( salario, planoTrabalho ){

    switch(planoTrabalho){
        case "A":
            console.log("Novo salário: R$" + (Salario = salario + ( salario * 0.1)));
            break;
        case "B":
            console.log("Novo salário: R$" + (Salario = salario + (salario * 0.15)));
            break;
        case "C":
            console.log("Novo salário: R$" + (Salario = salario + (salario * 0.2)));
            break;
        default:
            console.log("Plano Inválido.");
            break;          
    }
}

planoSalario(1000, "A")
planoSalario(2000, "B")
planoSalario(3000, "C")
planoSalario(1000, "D")