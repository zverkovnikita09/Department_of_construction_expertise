//Burger_Menu
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const burger_menu = document.querySelector('#burger_menu');
const burger_nav = document.querySelector('#burger_nav');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');


burger.addEventListener('click',()=>{
    if(burger_menu.classList.contains('_active')){
        body.style.overflowY = 'auto';
        burger_nav.style.transform = 'translateX(100%)'
        burger.src=('./img/burger.svg');
        burger.style.transform="scale(1)"
        setTimeout(() => {
            burger_menu.classList.toggle('_active');
        }, 250);
    }
    else{
        body.style.overflowY = 'hidden';
        burger_menu.classList.toggle('_active');
        burger.src=('./img/x_button.svg');
        burger.style.transform="scale(0.8)"
        setTimeout(() => {
            burger_nav.style.transform = 'translateX(0%)' 
        }, 10);
    }
})
window.addEventListener('resize', function(){
    if(burger_menu.classList.contains('_active')&&window.innerWidth > 970)
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
        CloseModal();
    }
})

function CloseModal(){
        modal.classList.remove('active');
        overlay.style.display = 'none';
        body.style.overflowY = 'auto';
}

function ShowModal(){
        overlay.style.display = 'block';
        modal.style.top = (window.innerHeight / 2)-modal.offsetHeight/2+'px';
        modal.style.left = (window.innerWidth / 2)-modal.offsetWidth/2+'px';
        setTimeout(() => {
            modal.classList.add('active')
        }, 10);
        body.style.overflowY = 'hidden';
}

const modal_button = document.querySelector('.modal_button');

modal_button.onclick = () =>{
    let width = modal.clientWidth + 'px';
    let height = modal.clientHeight +'px';
    modal.innerHTML = '<div class="form__approve"><h2>?????????????? ???? ??????????????????!</h2><p>?? ?????????????????? ?????????? ???? ?????? ????????????????, ?????????? ???????????????? ????????????????????????. ????????????????????, ?????????????????? ???????????? ???????????? ????????????????????????.</p><button type="button" onclick="CloseModal();" class="approve__button modal_button">??????????????</button></div>';
    modal.style.width = width;
    modal.style.height = height;
}