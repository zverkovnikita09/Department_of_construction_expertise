const rubrics = document.querySelectorAll('.rubric');

for(let rubric of rubrics){
    rubric.addEventListener('click', ()=>{
        for(let item of rubrics){
            item.classList.remove('selected');
        }
        rubric.classList.add('selected');
    })
}