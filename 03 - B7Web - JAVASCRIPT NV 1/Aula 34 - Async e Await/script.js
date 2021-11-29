//Primeira forma de fazer a requisição.
function requisitar() {
    const url = 'https://alunos.b7web.com.br/api/ping';
    /*const params = {
        method: 'POST',
        body: JSON.stringify({
            nome: 'Edson',
            idade: 23
        })
    };*/

    fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json);
        });
        console.log('Alguma coisa');
}

//Outra forma de fazer a requisição.
//Requisição assincrona, quando a função não irá executar ordenadamente e sim terá que esperar uma requisição.
async function requisitar2 (){
    const url = 'https://alunos.b7web.com.br/api/ping';
    //Await serve para rodar a função e ficar esperando a requisição.
    const r = await fetch (url);
    const json = await r.json();
    console.log(json);
    console.log('Alguma Coisa');
}

requisitar2();

console.log('Texto Qualquer');
