const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // retorna '10'
funcs[8]() // retorna '10'

// VAR não tem escopo de função, imprimi para todos o valor de '10'