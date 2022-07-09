let slider_items = document.querySelectorAll('.apartments__list');
let pages = document.querySelectorAll('.pages_links');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let currentSlide = 0;

const changeSlide = (n)=>{
    ShowSlides(currentSlide+=n);
}

function ShowSlides (j){
    for(let i = 0; i<pages.length;i++){
        pages[i].classList.remove('disabled');
        slider_items[i].style.display = 'none';
    }
    pages[j].classList.add('disabled');
    slider_items[j].style.display = 'grid';
    currentSlide = j;
    currentSlide <=0 ? prev.classList.add('disabled') : prev.classList.remove('disabled');
    currentSlide >=pages.length-1 ? next.classList.add('disabled') : next.classList.remove('disabled');
}

for (let i = 0; i<pages.length;i++){
    pages[i].addEventListener('click', ()=>
        ShowSlides(i)
        )
}