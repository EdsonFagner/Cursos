//Para selecionar todos os elementos com essa mesma classe.
//document.getElementsByClassName("subtitulo");
//Seletores novos.
//document.querySelector(); e doument.querySelectorAll();
//Obs: o document.querySelector(); apenas seleciona um elemento.
//Seleciona igual no HTML ex: document.querySelector(".lista");
//Seleção de elemento com classe ex2: document.querySelector("ol.lista");
//Seleção de elementos com ids ex3: document.querySelector("#demo");
//Obs: o document.querySelectorAll(); ele gera um array com todos os elementos daquela classe ou id...
let lista = document.querySelectorAll("li");
for(let i in lista){
    lista[i].style.color="#FF0000";
}