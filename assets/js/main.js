// // import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// // import * as carouselClick from './modules/carousel-change.js';
import * as config from './modules/swiper__props.js'; //Configs do Swiper
// // import lineClamp from './modules/line-clamp.js'; //line Clamp
// // import * as darkMode from './modules/dark-mode.js'; //line Clamp
// import linkDentroLink from './modules/a-dentro-a.js'; //link dentor de link
// // import progressBar from './modules/progress-bar.js'; //progress bar
// import firefox from './modules/firefox-checker.js'; //progress bar
// import mudaDeAcordoComCarouselAtivo from "./modules/carousel-ativo.js"
// import swiper from "./modules/swiperTrabalho.js"
// import menu from './modules/menu.js'; //js do menu

import Dom from './modules/constructors.js'; //selecionar elementos
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'



 let mediaQuery = window.matchMedia('(max-width: 1024px)').matches
/*if (mediaQuery) {

    // animacao.animaAoScroll()
} */




// menu
const hamburguer = document.querySelector('.hamburguer');
const menuMobile = document.querySelector('.menu__mobile');
const closeMenu = document.querySelector('.close');


hamburguer.addEventListener('click', abrirMenu);
closeMenu.addEventListener('click', fecharMenu);

function abrirMenu(){
    menuMobile.classList.add("ativo");
    
}

function fecharMenu(){
    menuMobile.classList.remove("ativo");
}


//scroll do menu

const menu = document.querySelector('.menu');



window.addEventListener('scroll', animaMenu);

function animaMenu(){
    const windowTop = window.pageYOffset;
    if((windowTop) > menu.offsetTop){
        menu.classList.add("scroll");
    } else {
        menu.classList.remove("scroll");
    }

    //mobile
    if((windowTop > menuMobile.offsetTop)){
        menuMobile.classList.add('scroll');
    } else {
        menuMobile.classList.remove('scroll');
    }
}



// animar ao scrollar;

const tamanhoDesktop = window.matchMedia('(min-width: 1024px)').matches;

if (tamanhoDesktop){
    function animacaoScroll(){
        const secoes = document.querySelectorAll('.js-section');
        if(secoes.length){
            const metadeTela = window.innerHeight * 0.6;
            function animacaoBonita(){
                secoes.forEach((section) =>{
                    const secoesTopo = section.getBoundingClientRect().top - metadeTela;
    
                    if (secoesTopo < 0){
                        section.classList.add('ativo');
                    } else {
                        section.classList.remove('ativo');
                    }
                })
    
            }
    
            animacaoBonita();
            window.addEventListener('scroll', animacaoBonita);
    
        }
    
    
    }
    
    animacaoScroll();

}






// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    const swiperDepo = new Swiper(".slide__container", config.propsCard);
    if(mediaQuery){
        const swiperMobile = new Swiper(".slide-container", config.propsCard);
    }


        

}
// else if (pageClientes) { // ★ Clientes  
//      new Dom().bodyClass("body__clientes");

// }

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
  });