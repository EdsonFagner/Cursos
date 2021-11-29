var menu=false;

function abrirToggle(){
    let menuArea=document.getElementById("menu-area");

    /*Primeira forma de resolver.
    if (menuArea.classList.contains('menu-opened')==true){
         menuArea.classList.remove('menu-opened');
    }
    else {
        menuArea.classList.add('menu-opened');
    }
    */

    //Segunda forma de resover.
   if(menuArea.style.width=='200px'){
       menuArea.style.width='0px';
   }
   else{
       menuArea.style.width='200px';
   }

}