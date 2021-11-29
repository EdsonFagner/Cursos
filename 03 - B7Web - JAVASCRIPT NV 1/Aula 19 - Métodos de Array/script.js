//let lista = ["Ovo", "Farinha", "Corante", "Massa"];

//Transforma todas as informações do array em uma unica string.
//let res = lista.toString();

//Transforma o array em string separando os itens com oq por no parâmetro.
//let res = lista.join(" - ");

//Procura um item específico no array e mostra qual a posição dele.
//let res = lista.indexOf("Corante");

//Remove o ultimo item do array.
//lista.pop();

//Revove o primeiro item do array.
//lista.shift();

//Adiciona um novo item no array.
//lista.push("Manteiga");

//Alterando array direto pelo index/posição dos elementos.
//Obs: Se for posto um item que não existe esse item é criado.
//lista[0] = "Ovos";

//Deleta um item do array, mas mantem o slot do array vazio.
//delete lista[1];

//Deleta itens do array.
//Tem dois parâmetros o primeiro indica a posição em que quer deletar e o sengundo qnts itens.
//Se setar apenas a posição ele pega a partir da posição e remove tudo.
//lista.splice(1,1);

//Concatenação de arrays.
//let lista2 = ["Prato", "Liquidificador", "Forno"];
//let res = lista.concat(lista2);

//Ordena o array em ordem alfabética.
//lista.sort();

//Inverte a ordem do array.
//lista.reverse();

//let lista = [45, 4, 9, 16, 25];
//let lista2 = [];

//Mapeia o array e roda a função em cada item do array.
//Obs: A função criada está retornando o valor dos itens multiplicados por 2 e inserindo no array lista2.
/*
lista2 = lista.map(function (item) {
    return item * 2;
});
*/

//Fazendo a mesma coisa da função map com o for.
//Percorre com o for cada item da lista e multiplica por 2 armazenando o resultado em lista2.
/*
for(let i in lista){
    lista2.push(lista[i]*2);
}
*/

//Essa função filtra o array exibindo apenas os que retornam true.
//Obs: Para isso precisamos criar uma função e especificar quais itens retornaram true ou false.
/*
lista2 = lista.filter(function (item){
    if(item<20){
        return true;
    }
    else {
        return false;
    }
});
*/

//Essa função testa todos os itens do array e retorna apenas verdadeiro ou falso.
//Obs: Temos que criar uma função para saber se todos os itens se adequam aquela condição.
/*
lista2 = lista.every(function (item){
    if(item>20){
        return true;
    }
    else {
        return false;
    }

});
*/

//Essa função retorna verdadeira se um dos itens satisfizer a condição.
/*
lista2 = lista.some(function (item){
    
    //if(item>20){
    //    return true;
    //}
    //else {
    //   return false;
    //}
    
    //Operador ternário
    return (item > 3)? true:false;//Retorno true ou false se a condição for satisfeita.
});
*/

//Essa função pesquisa um item e retorna o primeiro valor que satisfizer a condição.
//Obs: Pode retornar 3 parâmetros item, index e o array.
/*
lista2 = lista.find(function(item){
    return (item == 16)? true:false;
});
*/

//Essa função pesquisa um item e retorna o valor da posição em que ele se encontra no array.
/*
lista2 = lista.findIndex(function(item){
    return (item == 16)? true:false;
});
*/

lista = [
    {id:1, nome:'Edson', sobrenome: 'Fagner'},
    {id:2, nome: 'Ingrid', sobrenome: 'Silva'},
    {id:3, nome:'Elizete', sobrenome: 'Souto'}
];

let pessoa = lista.find(function (item){
    return (item.sobrenome == 'Silva')? true:false;
});

let res = pessoa;

console.log(res);