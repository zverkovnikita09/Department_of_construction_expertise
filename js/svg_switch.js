const items = document.querySelectorAll('.svg_item');
const description = document.querySelectorAll('.description_item');
for(let i=0;i<items.length;i++){
    items[i].addEventListener('click', ()=>{
        if (items[i].classList.contains('_active')){
            items[i].classList.remove('_active');
            description[i].style.display = 'none';
        }
        else{
            for (let j = 0; j<items.length;j++){
                items[j].classList.remove('_active');
                description[j].style.display = 'none';
            }
            items[i].classList.add('_active');
            description[i].style.display = 'block';
        }
    })
}