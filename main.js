'use strict'
//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const link=event.target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click',(event)=>{
    const link = event.target.dataset.link;
    const scrollTo= document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})

const home= document.querySelector('.home__container');
const homeheight= home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    const homeopacity=1-window.scrollY/homeheight;
    home.style.opacity = homeopacity;
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
})

document.addEventListener('scroll',()=>{
    if(window.scrollY>homeheight){
        arrowUp.classList.add('visible');
    }
    else{
        arrowUp.classList.remove('visible');
    }

})