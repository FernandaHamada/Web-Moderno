// IIFE -> Immediately Invoked Function Expression

(function(){ // definir constantes, variáveis e outras funções (não está em nenhum momento tocando o escopo global)
    console.log("Será executado na hora!")
    console.log("Fugindo do escopo mais abrangente!")
})() 
/* 
Será executado na hora!
Fugindo do escopo mais abrangente!
*/