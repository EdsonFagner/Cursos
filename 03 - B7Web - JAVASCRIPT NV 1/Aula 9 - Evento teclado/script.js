//Criando função e adicinando parametros
/*
function digitou(e){//parametro evento adicionado
    if (e.keyCode==13){//Se pressionar a tecla enter.
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}
*/
function digitou(e){//parametro evento adicionado
    if (e.keyCode==13 && e.ctrlKey==true){//Se pressionar ctrl+enter faça...
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}