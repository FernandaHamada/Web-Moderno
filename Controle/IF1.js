function boaNotica(nota){
    if (nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

boaNotica(8.1) //Aprovado com 8.1
boaNotica(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade..." + valor)
    }
}

seForVerdadeEuFalo() // false
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(NaN) // false
seForVerdadeEuFalo("") // false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) //'É verdade...-1'
seForVerdadeEuFalo(" ") // 'É verdade... '
seForVerdadeEuFalo('?') // 'É verdade...?'
seForVerdadeEuFalo([]) // 'É verdade...'
seForVerdadeEuFalo([1, 2]) // 'É verdade...1,2'
seForVerdadeEuFalo({}) // 'É verdade...[object Object]'