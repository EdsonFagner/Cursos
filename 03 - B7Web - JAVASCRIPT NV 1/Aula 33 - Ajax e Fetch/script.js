//Função Fetch para fazer requisições ajax.
//Fazendo uma requisição ajax no link especificado.
/*fetch('https://alunos.b7web.com.br/api/ping')
    .then((r)=>
        //transformando a rsposta em json.
        r.json()
    )
    .then((json)=>{
        console.log(json);
    });*/

const url = 'https://alunos.b7web.com.br/api/ping';

const params = {
    method: 'POST',
    //Transformando os objetos enviados em string
    body: JSON.stringify({
        //Objetos que serão enviados com o metodo post
        nome: 'Edson',
        idade: 23,
        sobrenome: 'Souto'
    })
};

//O primeiro parâmetro da função fetch é a url, e o segundo são os parâmetos de envio.
fetch(url, params)
    .then((r)=>
        //transformando a resposta em json.
        r.json()
    )
    .then((json)=>{
        console.log(json);
    });
