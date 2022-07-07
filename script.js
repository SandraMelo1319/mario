let mario = document.querySelector(".mario");
let pipe = document.querySelector(".pipe");

let jump =() => {
    mario.classList.add("jump");
    setTimeout(()=>{
    mario.classList.remove("jump");
    },500);
}
let loop = setInterval (

    () => {
        let pipePosition = pipe.offsetLeft;
        let marioPosition = +window.getComputerStyle(mario).bottom.replace('px','')
        console.log(marioPosition);
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition<60){
            pipe.style.animation = 'none;'
            pipe.style.animation =`${pipePosition} px`;
    
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './assets/img/mario dead.png';
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
        }
    },10
);
document.addEventListener("keydown",jump);