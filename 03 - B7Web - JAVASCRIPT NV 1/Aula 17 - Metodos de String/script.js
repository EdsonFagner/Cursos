let nome = 'Edson Fagner Souto Cardoso';
//Comando p/ exibir no console quantos caracters tem na string.
//console.log(nome.length);

//Armazenando comando em uma variavel.
//let resultado = nome.length;

//Comando para saber se tem o texto requisitado naquela string.
//let resultado = nome.indexOf("Edson");//Retorna a posição em que o texto começa, caso não ache retorna "-1".

//Criando if com comando de procura de string.
/*
let resultado='';
if (nome.indexOf("Edson")>-1){
    resultado="Achou!";
}
else {
    resultado = "Não Achou.";
}
*/



//Comando para copiar parte da string de uma posição inicial até uma posição final.
//Se apenas setar uma posição inicial ele copia dessa posição até o final.
//Se setar uma posição negativa ele conta as casas de trás pra frente para copiar.
//let resultado = nome.slice(0, 5);

//Faz a mesma coisa que o slice, mas não aceita números negativos para pegar posição.
//let resultado = nome.substring();

//Esse comando faz a mesma coisa que os outros dois, mas o segundo parametro indica a quantidade de caracteres que queremos pegar a partir do primeiro parametro.
//Tambem funciona com valores negativos.
//let resultado = nome.substr(-8, 5);

//Comando com 2 parametros, pesquisa por um e substui por outro.
//Obs: Não modifica a variavel inicial, apenas cria um resultado alterado.
//let resultado = nome.replace("Souto", "Silva");

//Esse comando transforma as letras em maiúsculas.
//let resultado = nome.toUpperCase();

//Esse comando transformas as letras em minúsculas.
//let resultado = nome.toLowerCase();

//Esse comando concatena a variavel em questão com algo.
//Obs: pode concatenar mais de um parametro dentro da mesma função separados por vírgula.
//let resultado = nome.concat(" ABC");

//Esse comando retira os espaços da string entre o inicio e a primeira letra e o fim e a ultima letra.
//let resultado = nome.trim();

//Mostra o caracter que esta na string na posição setada no parametro
//let resultado = nome.charAt(0);
//Outra forma a partir do Ecmascript 5.
//let resultado = nome[1];

//Esse comando transforma uma string em um array.
//Onde achar o caracter corta e divide em array.
//Neste exemplo temos um array com 4 posições de 0-3.
let resultado = nome.split(' ');

console.log(resultado);