let nome = "Edson";
let idade = 23;

//Forma normal
//let frase = "Meu nome é "+nome+", eu tenho "+idade+" anos e ano que vem eu faço "+(idade+1)+" anos.";

//Template strings
let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu faço ${idade+1} anos.`;

console.log(frase);
