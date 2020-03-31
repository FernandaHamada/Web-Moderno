/* 06)​ Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
e a segunda retornará o valor da aplicação sob o regime de juros compostos. 
*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    console.log("Juros: R$" + (capitalInicial * taxaDeJuros * tempoDeAplicacao).toFixed(2))
    console.log("Montante: R$" + (capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)).toFixed(2))
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    console.log("Montante total: R$" + (capitalInicial* Math.pow(1 + taxaDeJuros, tempoDeAplicacao)).toFixed(2)) // Math.pow() potência
}

jurosSimples(1200, 0.02, 10)
jurosComposto(20000, 0.005, 48)