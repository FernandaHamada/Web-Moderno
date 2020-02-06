const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao) // com this ele vai acessar o atributo saudação
    }
}

pessoa.falar() // retorna 'Bom dia!'
const falar = pessoa.falar
falar() // 'undefined' , conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind aponta para um componente
falarDePessoa() // 'Bom dia!'

const falar2 = pessoa.falar
falar2() // 'undefined'