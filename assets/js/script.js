
let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

let jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let loop = setInterval(
    () => {

        let pipePosition = pipe.offsetLeft;
        let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log(marioPosition);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = `none`;
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = `none`;
            mario.style.bottom = `${marioPosition}px`

            mario.src = "/assets/img/mario-dead.gif";
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            clearInterval(loop);
        }
    }, 10
);

document.addEventListener('keydown', jump);
