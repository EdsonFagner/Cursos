let n = 10;
let n2 = 10.536298721

//Essa função transforma número em string.
let res = n.toString();

//A função exibe o número decimal até uma certa quantidade de casas apos o ponto indicadas no parâmetro.
let res2 ="R$ " + n2.toFixed(2);



console.log(res);

console.log(res2);

let n3 = '25.5';

//Essa função converte string para numero inteiro.
//let res3 = parseInt(n3) + 5;


//Essa função converte string para numero flutuante.
let res3 = parseFloat(n3) + 5;


console.log(res3);