const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');

let intervalTime=5000;


const nextImage=()=>{
    const curr=document.querySelector('.current');
    curr.classList.remove('current');
    if(curr.nextElementSibling!=null){
        curr.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
    
}
 
const prevImage=()=>{
    const curr=document.querySelector('.current');
    curr.classList.remove('current');
    if(curr.previousElementSibling!=null){
        curr.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length-1].classList.add('current');
    }
}

let inter=setInterval(nextImage,intervalTime);

next.addEventListener('click',()=>{
    nextImage();
    clearInterval(inter);
    inter=setInterval(nextImage,intervalTime);
})

prev.addEventListener('click',()=>{
    prevImage();
    clearInterval(inter);
    inter=setInterval(nextImage,intervalTime);
})

