let dia = 6;
let diaNome='';

switch(dia){
    //Criando switch para dizer dia da semana
    /*
    case 1:
        diaNome='Segunda-Feira';
        break;
    case 2:
        diaNome='Terça-Feira';
        break;
    case 3:
        diaNome='Quarta-Feira';
        break;
    case 4:
        diaNome='Quinta-Feira';
        break;
    case 5:
        diaNome='Sexta-Feira';
        break;
    case 6:
        diaNome='Sabado';
        break;
    case 7:
        diaNome='Domingo';
        break;
    */
   //Criando switch para dizer se é final de semana ou dia de semana.
   //Primeira forma.
   /*
   case 6:
       diaNome='Final de Semana';
       break;
    case 7:
        diaNome='Final de Semana';
        break;
    default:
        diaNome='Dia Comercial';
        break;
    */
    //Segunda forma.
    case 6:
    case 7:
        diaNome='Final de Semana';
        break;
    default:
        diaNome='Dia Comercial';
        break;


}

document.getElementById("dia").innerHTML="Hoje é: "+diaNome;