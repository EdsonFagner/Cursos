 //Usando operador rest.
 //O operador rest serve para armazenar mais de uma entrada em uma variavel criando assim um array.
 //Para usar orest é só adicionar "..." antes da variavel.
 /*function adicionar (...numeros){

    console.log(numeros);
 }

 adicionar(5, 6, 7, 8, 9, 10, 11, 12, 13, 14);*/

 //Usando o rest no array.
 /*function adicionar (...nomes){

    console.log(nomes);
 }
 adicionar('Edson', 'Ingrid', 'Alice');*/

 //Juntando o spread com rest.
function adicionar (nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;
   
}

let nomes = ['Edson', 'Ingrid'];

let outros = adicionar (nomes, 'Alice', 'Elizete', 'Antonio');

console.log(outros);