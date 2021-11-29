//Criando e executando função!
/*
function alterar () {
    document.getElementById("titulo").innerHTML="Trocou o título!";
    document.getElementById("campo").value="Trocou o campo!";
}

alterar();
*/
//Adicionando parametros a função
function alterar (titulo) {//o titulo nesse caso é um parametro
    document.getElementById("titulo").innerHTML=titulo;
    document.getElementById("campo").value=titulo;
}
//Testando o parametro dentro da função.
alterar("Parametro funcionando");

//Criando uma função para somar e jogar o resultado no campo.
/*
function somar (x, y){
    let total = x + y;
    document.getElementById("campo").value=total;
}
*/

//

function somar (x, y){
    let total = x + y;

    return total;
    //return retorna o valor especificado de algo ex. uma variavel.
}

var resultado = somar(10, 15);

console.log(resultado);
