/* 13) ​Crie um programa que exibe se um dia é dia útil, 
fim de semana ou dia inválido dado o número referente ao dia. 
Considere que domingo é o dia 1 e sábado é o dia 7. 
Utilize a estrutura Switch. */

function diaDaSemana(dia){
    switch(dia) {
        case 1:
            console.log("Domingo (Fim de semana)");
            break;
        case 2:
            console.log("Segunda-feira (Dia útil)");
            break;
        case 3:
            console.log("Terça-feira (Dia útil)");
            break;
        case 4:
            console.log("Quarta-feira (Dia útil");
            break;
        case 5:
            console.log("Quinta-feira (Dia útil)");
            break;
        case 6:
            console.log("Sexta-feira (Dia útil)");
            break;
        case 7:
            console.log("Sábado (Fim de semana)");
            break;
        default:
            console.log("Dia Inválido!")
            break;                         
    }
}

diaDaSemana(7)
diaDaSemana(8)
diaDaSemana(3)