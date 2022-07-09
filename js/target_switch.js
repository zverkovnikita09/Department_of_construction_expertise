const targets = document.querySelectorAll('.target');
const address = document.querySelectorAll('.address_item');

for(let i=0; i<targets.length;i++){
    targets[i].addEventListener('click',()=>{
        if(targets[i].classList.contains('img_active')){
            return;
        }
        else {
            for(let j=0; j<targets.length;j++){
                targets[j].classList.remove('img_active');
                targets[j].src = './img/contacts/target.svg';
                address[j].style.display = 'none';
            }
            targets[i].classList.add('img_active');
            targets[i].src = './img/contacts/active_target.svg';
            address[i].style.display = 'block';
        }
    })
}