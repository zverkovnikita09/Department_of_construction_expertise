const blocks = document.querySelectorAll('.switch__item');
const shownBlock = document.querySelectorAll('.switch__block_item');
for(let i =0; i<blocks.length;i++){
    blocks[i].addEventListener('click', ()=>{
        if(blocks[i].classList.contains('selected')){
            return;
        }
        else{
            for(let j =0; j<blocks.length;j++){
                blocks[j].classList.remove('selected');
                shownBlock[j].style.display = 'none';
            }
            blocks[i].classList.add('selected');
            shownBlock[i].style.display = 'block';
        }
    })
}