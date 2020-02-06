const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)

}

fabricantes.forEach(imprimir)
/*
retorna
1. Mercedes
2. Audi
3. BMW
*/

fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})
/*
Mercedes
Audi
BMW
*/

fabricantes.forEach(fabricantes => console.log(fabricantes))
/* 
Mercedes
Audi
BMW
*/