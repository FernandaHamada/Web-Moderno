// usando a notação literal 
const obj1 = {}
console.log(obj1) /*{}*/

// object em js
console.log(typeof Object, typeof new Object) /*function object*/ 
const obj2 = new Object
console.log(obj2) /*{} */


// função construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) // 6.7915 2249.2425

// função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }       
    }
}

const f1 = criarFuncionario("Maria", 7980, 4)
const f2 = criarFuncionario("João", 11400, 1)

console.log(f1.getSalario(), f2.getSalario()) // 6916 11020

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // [Object: null prototype] { nome: 'Ana' }

// uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) //Sou um JSON