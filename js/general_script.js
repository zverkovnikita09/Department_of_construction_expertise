//Burger_Menu
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const burger_menu = document.querySelector('#burger_menu');
const burger_nav = document.querySelector('#burger_nav');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const approve_form = '<div class="form__approve"><p>Спасибо за обращение</p><p>Наши консультанты свяжутся с Вами в ближайшее время</p><button type="button" class="button approve__button">Закрыть</button></div>';


burger.addEventListener('click',()=>{
    if(burger_menu.classList.contains('_active')){
        body.style.overflowY = 'auto';
        burger_nav.style.transform = 'translateX(100%)'
        burger.src=('./img/burger.svg');
        setTimeout(() => {
            burger_menu.classList.toggle('_active');
        }, 250);
    }
    else{
        body.style.overflowY = 'hidden';
        burger_menu.classList.toggle('_active');
        burger.src=('./img/x_button.svg');
        setTimeout(() => {
            burger_nav.style.transform = 'translateX(0%)' 
        }, 10);
    }
})
window.addEventListener('resize', function(){
    if(burger_menu.classList.contains('_active')&&window.innerWidth > 870)
    {
        body.style.overflowY = 'auto';
        burger_nav.style.transform = 'translateX(100%)'
        burger_menu.classList.remove('_active');
        burger.src=('../img/burger.svg');
    }

    if(modal.classList.contains('active')){
        modal.style.top = (window.innerHeight / 2)-modal.offsetHeight/2+'px';
        modal.style.left = (window.innerWidth / 2)-modal.offsetWidth/2+'px';
    }
})

window.addEventListener('click', (e)=>{
    if(e.target==overlay){
        modal.classList.remove('active');
        overlay.style.display = 'none';
        body.style.overflowY = 'auto';
    }
})

function ShowModal(){
        overlay.style.display = 'block';
        modal.style.top = (window.innerHeight / 2)-modal.offsetHeight/2+'px';
        modal.style.left = (window.innerWidth / 2)-modal.offsetWidth/2+'px';
        setTimeout(() => {
            modal.classList.add('active')
        }, 10);
        body.style.overflowY = 'hidden';
}

const form_buttons = document.querySelectorAll('.form_button');
const forms = document.forms;

for(let i=0; i<form_buttons.length; i++){
    form_buttons[i].addEventListener('click', ()=>{
        forms[i].innerHTML = approve_form;
    })
}