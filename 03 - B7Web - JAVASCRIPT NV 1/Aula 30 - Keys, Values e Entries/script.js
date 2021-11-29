let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

let lista2 = {
    nome: 'Edson',
    nome2: 'Alice',
    nome3: 'Elizete',
    nome4: 'Alguem'
}

//Função que retorna todas as chaves do array.
console.log(Object.keys(lista));

//Função que retorna todos os valores do array.
console.log(Object.values(lista));

//Essa função cria um array para cada item sendo a primeira posição seu index e a segunda seu conteúdo.
console.log(Object.entries(lista));

//Testando em objeto.
console.log(Object.entries(lista2));

//As funções funcionam também em objetos.
console.log(Object.keys(lista2));