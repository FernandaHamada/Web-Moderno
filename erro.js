function tratarErroELancar(error){
    //throw new Error("...")
    //throw 10
    //throw true
    //throw "mensagem"
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + "!!!") // throw { ^
    } catch (e){
        tratarErroELancar(e) 
        /* retorna 
           {nome: 'TypeError',
            msg: "Cannot read property 'toUpperCase' of undefined",
            date: 2020-01-29T14:19:29.816Z} */
    } finally{
        console.log("Final")
    }

}

const obj = {nome:"Roberto" }
imprimirNomeGritado(obj) // "Cannot read property 'toUpperCase' of undefined"
