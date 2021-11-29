//Formas de criar funções

//Primeira forma.
/*function somar(x, y){
    return x+y;
}*/

//Segunda forma.
/*let somar = function(x, y){
    return x+y;
}*/

//Terceira forma. Função arrow.
/*let somar = (x, y) => {
    return x+y;
}*/

//Outra forma de arrow function
//Quando for uma expressão direta não há necessidade de inclusão dos colchetes e do return.
//Uma vez colocado os colchetes é obrigatório ter o return.
/*let somar = (x, y) => x+y;*/

//Outra variação de arrow function
//Quando se tem apenas um parâmetro o parenteses é opcional no parâmetro.
//Se não tiver nenhum parâmetro é obrigado a por "()".
//Na arrow function não se aplica o termo "this".
let letraNoNome = nome => nome.length;

console.log(letraNoNome('Edson'));