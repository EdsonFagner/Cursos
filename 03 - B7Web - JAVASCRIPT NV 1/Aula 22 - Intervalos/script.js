/*
let timer;

function comecar(){
    //setInterval(); Função usada para executar algo x vezes.
//Obs: Tem dois parâmetros, o primeiro seta oq quer executar e o segundo é de quanto em quanto tempo em milesegundos.
    timer = setInterval(showTime, 1000);
}

function parar(){
    //Essa função para o intervalo criado para executar a função rodando na variavel timer.
    clearInterval(timer);
}


function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    txt = h+':'+m+':'+s;
    document.querySelector('#demo').innerHTML=txt;
}
*/


let timer;
//Essa função aguarda um tempo para depois executar o que foi pedido.
//Recebe 2 parâmetros uam função e o outro é o tempo que ele vai esperar pra executar a função em milesegundos.
function rodar(){
    timer = setTimeout(function (){
        document.querySelector(".demo").innerHTML = 'Rodou!';
    }, 2000);
}

//Para o timeout antes dele rodar.
//Como parâmetro recebe a variavel que está a função que precisa ser parada.
function parar (){
    clearTimeout(timer);
}
