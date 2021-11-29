//Criando o objeto carro e adicionando propriedades.
let carro = {
    nome:'Fiat',//propriedade nome
    modelo:'Uno',//propriedade modelo
    peso:'800kg',//propriedade peso
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("Ligando o "+this.modelo)
        console.log("VRUM VRUM!!!");
    },
    acelerar:function(){
        if (this.ligado==true){
            console.log("RAMDAMDAMDAMDAM!!!");
        } 
        else{
            console.log(this.nome+" "+this.modelo+" não está ligado!")
        }
    }
};
//Acessando a propriedade nome do objeto carro de uma das formas
//console.log(carro['nome']);

//Acessando a propriedade nome do carro de outra forma mais comum.
//console.log(carro.nome);

console.log("Modelo: " + carro.modelo);
carro.ligar();
carro.acelerar();


//experimento de objeto dentro de array
let experimento = [
    {nome:'Fiat', modelo: 'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}
];

console.log(experimento[2].modelo);

//Outro jeito de acessar um parametro dentro de um objeto de uma matriz.
//console.log(experimento[2]['modelo']);

