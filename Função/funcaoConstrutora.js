function Carro (velocidadeMaxima = 200, delta = 5){
    // atributo privado(pertece ao escopo da função)
    let velocidadeAtual = 0

    // método público (visível fora dessa função construtora)
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // retorna '5'

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // '20'

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // '80'

console.log(typeof Carro) // 'function'
console.log(typeof ferrari) // 'object'