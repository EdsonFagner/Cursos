//let telefone = '5789';

//Essa função serve para preencher a string caso ela não tenha o número obrigatório de caracteres definidos por ela mesma nos parâmetros.
//Possui 2 parâmetros, o primeiro define quantos caracteres a string tem que ter obrigatóriamente.
//O segundo é o item que vai inserir para a string chegar aos 9 números caso não tenha os números.
//console.log(telefone.padEnd(9, '*'));
//Obs: O padEnd(); preenche depois e o padStart(), preenche antes.

//Exemplo prático de como utilizar o padStart();
let cartao = '4551811161513928';

let cartao2 = cartao.slice(12);

let cartao3 = cartao2.padStart(16, '*');

console.log('Esse é o seu cartão? '+cartao3);
