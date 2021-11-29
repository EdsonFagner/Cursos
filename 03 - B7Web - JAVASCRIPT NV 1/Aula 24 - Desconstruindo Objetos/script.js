let pessoa = {
    nome: 'Edson',
    sobrenome: 'Fagner',
    idade: 90,
    social:{
        facebook: 'EdsonFagner',
        instagram: {
            url: "@EDFSouto",
            seguidores: 1329
        }
    },
    //nomeCompleto: function (){
      //  return `${this.nome} ${this.sobrenome}`
    //}
};

//Forma normal
//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let instagram = pessoa.social.instagram;

//Forma desconstruída
//Para trocar o nome da variavel desconstruida é só colocar ":" e adicionar o novo nome.
//Para inserir um valor padrão quando a variavel não foi declarada é só por um "=" e adicionar o valor
//Caso o valor estiver declarado a função não pega o valor padrão.
//let {nome:pessoaNome, sobrenome, idade, peso = 75.5} = pessoa;
//console.log(pessoaNome, sobrenome, idade, peso);

//Pegando parâmetros secundários dentro do objeto.
//let {facebook, instagram} = pessoa.social;

//Pegando parâmetros primários e secundários ao mesmo tempo
//let {nome, idade, social:{facebook, instagram:{url:instagram, seguidores}}} = pessoa;

//console.log(nome, idade, facebook, instagram, seguidores); 


//Criando função com os itens do objeto.
//function pegarNomeCompleto (obj) {
//    return obj.nome+" "+obj.sobrenome;
//};

//console.log(pegarNomeCompleto(pessoa));

//Outra forma de criar a função pegando os objetos
//function pegarNomeCompleto (obj) {
//    let nome = obj.nome;
//    let sobrenome = obj.sobrenome;
    
//    return `${nome} ${sobrenome}`;
//};

//console.log(pegarNomeCompleto(pessoa));

//Desconstrução no próprio parâmetro da função
//ainda podemos jogar um valor padrão nos parâmetros da desconstrução para caso não estiver setado
function pegarNomeCompleto ({nome, sobrenome = 'Cardoso', social:{instagram:{url:instagram}}}) {
    
   return `${nome} ${sobrenome} (Siga em ${instagram})`;
};

console.log(pegarNomeCompleto(pessoa));