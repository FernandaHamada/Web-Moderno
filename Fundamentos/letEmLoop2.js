const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // retorna '2'
funcs[8]() // retorna '8'

// LET armazena na memória o valor do índice