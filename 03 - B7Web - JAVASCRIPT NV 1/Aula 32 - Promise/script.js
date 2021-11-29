//A função promises faz com q vc receba a resposta que o resultado será executado antes da execução.
function fazer(){
    //return new Promise ();
    //dentro da promise criamos uma arrow function que recebe 2 parâmetros "resolved" e "reject".
    //ou 
    let promise = new Promise ((resolve, reject)=>{
        //Resolve usamos para quando a execução tiver sucesso e reject quando não obtemos sucesso.
        resolve("OK");

        setTimeout(()=>{
            resolve('Ok');
        }, 3000);
    });
    return promise;
}

//Executando a função fazer
//Quando executamos a função adicionamos a função "then" que significa "então" ou "a partir disso".
//Criamos dentro da função "then" outra arrow function com a variável "resposta" como parâmetro.
fazer()
    .then((resposta)=>{
        console.log('Resposta: '+resposta);
    })
