//Essa função calcula o PI.
//let novoValor = Math.PI;

//Essa função arredonda o número dependendo do próprio número.
//let novoValor = Math.round(3.67);//Math.floor(); - Arredonda p/ baixo. Math.ceil(); - Arredonda p/ cima.

//Essa função serve para retornar o valor absoluto do número, ou seja, o valor positivo do número.
//let novoValor = Math.abs(-195);

//Essa função retorna o menor valor entre os números.
//let novoValor = Math.min(358, 32, 57, 99, 150, 167);//Para retornar o maior valor Math.max();

//Essa função retorna um número aleatório entre 0 e 1;
//Para conseguir um número aleatório entre os quais você escolher é preciso fazer uma combinação de função.
//let novoValor = Math.random();
//Combinação de funções para gerar um número aleatória de 0 até 100.
//Obs: O uso da função de arredondamento para baixo é para garantir que esse número não passe de 100.
let novoValor = Math.floor(Math.random()*100+1);

console.log(novoValor);