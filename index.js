const canvas = document.querySelector('canvas');
const img = document.createElement('img');
img.src = 'img/sprite.png';
canvas.width = '500';
canvas.height='500';

const context = canvas.getContext('2d');
function gameLoop(){
     context.drawImage(img,0,0);
     window.requestAnimationFrame(gameLoop);

}
gameLoop();