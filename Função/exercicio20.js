/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais cédulas): 
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.  
  */

  function sacarDinheiro(valorSaque){
    let nota100 = 0
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota5 = 0
    let nota2 = 0
    let nota1 = 0
    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota){
      switch (valorNota){
        case 100:
          valorSaque = valorSaque - 100;
          nota100++;
          break;
        case 50:
          valorSaque = valorSaque - 50;
          nota50++;
          break
        case 20:
          valorSaque = valorSaque - 20;
          nota20++;
          break;
        case 10:
          valorSaque = valorSaque - 10;
          nota10++;
          break;
        case 5:
          valorSaque = valorSaque - 5;
          nota5++;
          break;
        case 2:
          valorSaque = valorSaque - 2;
          nota2++;
          break;
        case 1:
          valorSaque = valorSaque - 1;
          nota1++;
          break;

      }
      valorNota = calcularValorNota(valorSaque)
    }

    return resultado(nota100, nota50, nota20, nota10, nota5, nota2, nota1)

  }
       

  function calcularValorNota(valorSaque){
  if (valorSaque >= 100){
    return 100
  } else if (valorSaque >= 50){
    return 50
  } else if (valorSaque >= 20){
    return 20
  } else if (valorSaque >= 10){
    return 10
  } else if (valorSaque >= 5){
    return 5
  } else if (valorSaque >= 2){
    return 2
  } else if (valorSaque >= 1){
    return 1
  }
}

function resultado(nota100, nota50, nota20, nota10, nota5, nota2, nota1){
  let resultado = " "
  if (nota100 > 0){
    resultado = resultado + `${nota100} nota(s) de R$100,00 `
  } 

  if (nota50 > 0){
    resultado = resultado + `${nota50} nota(s) de R$50,00 `
  }

  if (nota20 > 0){
    resultado = resultado + `${nota20} nota(s) de R$20,00 `
  }

  if (nota10 > 0){
    resultado = resultado + `${nota10} nota(s) de R$10,00 `
  }

  if (nota5 > 0){
    resultado = resultado + `${nota5} nota(s) de R$5,00 `
  }

  if (nota2 > 0){
    resultado = resultado + `${nota2} nota(s) de R$2,00 `
  }

  if (nota1 > 0){
    resultado = resultado + `${nota1} nota(s) de R$1,00 `
  }

  return resultado
}
  
console.log(sacarDinheiro(200))
console.log(sacarDinheiro(153))

 