// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 220

console.log(produto) // '{ nome: 'cadeira', 'marca de produto': 'Generica', preco: 220 }'
delete produto.preco
delete produto['marca de produto']

console.log(produto) // '{ nome: 'cadeira' }'

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua Abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro) /* {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
      nome: 'Raul',
      idade: 56,
      endereco: { logradouro: 'Av Gigante', numero: 1000 }
    },
    condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
    calcularValorSeguro: [Function: calcularValorSeguro]
  }
   */

   delete carro.condutores
   delete carro.proprietario.endereco
   delete carro.calcularValorSeguro
   console.log(carro) /* {
    modelo: 'A4',
    valor: 89000,
    proprietario: { nome: 'Raul', idade: 56 }
  } */

  console.log(carro.condutores) // undefined
  
