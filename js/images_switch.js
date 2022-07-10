const images = document.querySelectorAll('.collection_item');
const selected_img = document.querySelector('#selected_image');
for (let image of images){
    image.addEventListener('click', ()=>{
        for (let i of images){
            i.classList.remove('selected');
        }
        image.classList.add('selected');
        selected_img.src = image.src;
    })
}