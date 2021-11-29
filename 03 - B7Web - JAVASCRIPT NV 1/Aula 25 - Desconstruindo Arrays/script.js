//Desconstruindo um array
//Na desconstrução do array não conseguimos pegar específicamente os itens mas sim suas posições
//Nomeando os itens do array por variaveis a primeira sempre é a posição 0 do array e assim por diante.
//Para pular os itens indesejados é necessário deixar os espaços em branco.
//let info = ['Edson Fagner', 'Edson', 'Fagner', '@EFSCardoso'];

//let [ nomeCompleto, , , instagram ] = info;

//console.log(nomeCompleto, instagram);

//Desconstruindo array que acabou de criar.
//Podemos definir valores padrões para desconstrução de array também.
//let [nome, sobrenome, idade=23] = ['Edson', 'Fagner'];

//console.log(nome, sobrenome, idade);

//Gerando um array e fazendo a desconstrução dele através de uma função.

function criar(){
    let a = [1,2,3];
    return a;
}

let numeros = criar();

//let [a, b, c] = numeros;

//Outra forma
let [a, b, c] = criar();

console.log(a, b, c);