const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter 'r', do índice 4
console.log(escola.charAt(5)) // retorna uma valor vazio
console.log(escola.charCodeAt(3)) // retorna o valor da tabela unicode '51'
console.log(escola.indexOf('3')) // retorna o digito '3'

console.log(escola.substring(1)) // retorna 'od3r', do índice 1 até o final
console.log(escola.substring(0, 3)) // retorna 'Cod', do 0 até o 3

console.log('Escola'.concat(escola.concat("!"))) // retorna 'EscolaCod3r!' (concatenação)
console.log(escola.replace(3, 'e')) // retorna 'Coder'

console.log("Ana, Maria, Pedro".split(',')) // retorna [ 'Ana', 'Maria', 'Pedro' ]
