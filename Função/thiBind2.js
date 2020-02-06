function Pessoa (){
    this.idade = 0

    const self = this

    setInterval(function(){ // temporizador
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa // sem o .bind(this) 'NaN...'
// com bind(this) retorna a sequência de números do 1, 2, 3 ...
// ou criando uma constante 'self = this', retorna a sequência