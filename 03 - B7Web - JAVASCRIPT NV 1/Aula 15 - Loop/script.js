//Existem 2 tipos de for o for loop e o for loop array.

//For loop.
/*
let texto = '';
for (let i=1; i<=50; i++){
    texto = texto + i + '<br/>';
}

document.getElementById("demo").innerHTML=texto;
*/

//For loop array.
/*
let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Lamborghini'];
let html = '<ul>';
for (let i in carros){
    html+='<li>' + carros [i] + '</li>';
}
html +='</ul>';

document.getElementById("demo").innerHTML=html;
*/

//While loop
let html = '';

let c=1;

while(c<=10){
html+="Número: "+ c +'<br/>';
c++;
}

document.getElementById('demo').innerHTML=html;
