/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */

function areaTriangulo(a ,b ,c){
    if ( a == b && a == c && c == b){
        return "Triângulo Equilátero"
    } else if (a == b && a != c || c == b && b != a || a == c && b != a){
        return "Triângulo Isósceles"
    }
    else {
        return "Triângulo Escaleno"
    }
}

console.log(areaTriangulo(7, 7, 7))
console.log(areaTriangulo(4, 4, 8))
console.log(areaTriangulo(4, 5, 4))
console.log(areaTriangulo(5, 4, 4))
console.log(areaTriangulo(7, 8, 9))