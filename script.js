let click = document.getElementById('click');
let on = document.querySelectorAll('.on');
let off=  document.querySelector('.off');
let kpayDiv=  document.querySelector('.kpayDiv');


click.addEventListener('click',()=>{
    off.classList.add('display-none')

    
setTimeout(function(){
    kpayDiv.classList.toggle('display-none')
},3300);

    for(let i=0; i<= on.length; i++){
        on[i].classList.toggle('display-none');
        on[i].classList.toggle('display-block');
    }


    

})
