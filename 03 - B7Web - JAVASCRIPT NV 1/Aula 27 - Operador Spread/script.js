/*let numeros = [1, 2, 3, 4];*/

//Usando o spread operator em um array.
//Para usar continuar um array adicione "..." e o nome do array "...numeros"
//Se tirar os outros numeros ele simplismente copia o array numeros. 
/*let outros = [...numeros, 5, 6, 7, 8];*/

//Usando spread operator em um objeto.
/*let info = {
    nome: 'Edson',
    sobrenome: 'Fagner',
    idade: 68
}

let novaInfo = {...info, 
    cidade: 'Queimados',
    estado: 'Rio de Janeiro',
    pais: 'Brasil'
}

console.log(novaInfo);
*/

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: 178238761,
        data_cadastro: new Date()
    };
    return novasInfo;
}

console.log(adicionarInfo({nome: 'Edson', sobrenome: 'Fagner'}));
