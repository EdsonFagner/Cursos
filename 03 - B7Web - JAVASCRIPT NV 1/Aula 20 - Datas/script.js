//Essa classe aceita 7 parâmetros.
//Começando com ano, após mês, dia, hora, minuto, segundo e milésimos.
//O mês começa em 0, ex: janeiro=0, fevereiro=1...
//Se por o parâmetro inicial como 0 ele retorna um valor padrão.
//Se defininir um valor inicial que não seja 0 ele retorna a data em milesegundos a partir do valor padrão.
//Se for definido um valor negativo ele conta do valor padrão para trás.
//let d = new Date(2020, 0, 1, 12, 30, 12);

//Outra forma de criar a data é criando ela como string.
//O mínimo necessário para gerar uma data é o ano e o mês.
//let d = new Date('2020-01-15 15:42:17');

//Exibe todas as informações relacinadas a data acessadas pelo dispositivo que solicitou.
//console.log(d);

//Exibe apenas o dia da semana, mês, dia e ano em questão.
//Obs: Se colocar apenas toString retorna o valor completo.
//console.log(d.toDateString());

//Exibe a as mesmas informações do anterior porem com o fusohorário padrão de greenwich.
//console.log(d.toUTCString());

//let d = new Date();

//Essa função retorna apenas o ano da data.
//let novoValor = d.getFullYear();

//Essa função retona apenas o valor do mês da data.
//Obs: Sendo 0=janeiro e por ai vai...
//let novoValor = d.getMonth();

//Essa função retorna o dia da semana da data.
//Obs: Sendo domingo=0 e por ai vai...
//let novoValor = d.getDay();

//Essa função retorna o dia da data.
//let novoValor = d.getDate();

//Essa função retorna as horas da data.
//let novoValor = d.getHours();// getMinutes(); - Para os minutos. getSeconds() - Para os segundos. getMilleseconds(); - Para pegar os milesegundos.

//Essa função retorna o valor em milesegundos da data padrão até a data atual.
//Obs: Data padrão: 00:00, 01/01/1970.
//let novoValor = d.getTime();

//Essa função retorna o timestamp sem precisar de criar objeto ou criar outra função.
//TimeStamp = Data em milesegundos desde a data padrão.
//let novoValor = Date.now();

//Essa função é usada para trocar o ano de uma data.
//Obs: Também modifica o mês e o dia.
//d.setFullYear(1999);

//Essa função é utilizada para trocar o mês da data.
//Obs: de 0 - 11, sendo 0=janeiro e por ai vai.
//d.setMonth(11);

//Essa função é utilizada para alterar o dia da data.
//d.setDate(11);

//Essa função aumenta ou diminui a quantidade de dias levando em conta a data atual.
//Essa função também se aplica a outros parâmetros ex: d.setHours(d.getHours()+10);
//d.setDate(d.getDate()+5);

//d.setHours(); Altera a hora.
//d.setMinutes(); Altera o minuto.
//d.setSeconds(); Altera os segundos.
//d.setMilliseconds(); Altera os milesegundos.

//let novoValor = d;
var d = new Date();

var a = d.getDate();
var b = d.getMonth();
var c = d.getFullYear();

var e = `${a}:${b}:${c}`;

console.log(e);
