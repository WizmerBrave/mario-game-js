const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const button = document.querySelector('.button')
const clouds = document.querySelector('.clouds')


const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const verifyLost = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = clouds.offsetLeft;


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudPosition}px`;

        button.classList.add('show-button')
        
        document.addEventListener('keydown', function(e) {
            if(e.key === ' ' || 'ArrowUp'){
                restartGame()
            }
        })
        clearInterval(verifyLost)
    }
}, 10)


const restartGame = () => {
    document.location.reload(true)
}

document.addEventListener('keydown', jump)