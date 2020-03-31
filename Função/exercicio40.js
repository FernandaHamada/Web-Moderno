/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos
 de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 
 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.  */

 const vetorNotas = [1, 2, 3, 4, 5.5 ,6.7, 8, 9.5, 10]

 function conceito(vetorNotas){
     for (let i = 0; i < vetorNotas.length; i++){
        if (vetorNotas[i] > 0.0 && vetorNotas[i] <= 4.9){
            console.log(vetorNotas[i] + " = conceito D")
        } else if (vetorNotas[i] > 4.9 && vetorNotas[i] <= 6.9){
            console.log(vetorNotas[i] + " = conceito C")
        } else if (vetorNotas[i] > 6.9 && vetorNotas[i] <= 8.9){
            console.log(vetorNotas[i] + " = conceito B")
        } else{
            console.log(vetorNotas[i] + " = conceito A")
        }
     }
}

console.log(conceito(vetorNotas))
 