const canvas = document.querySelector('canvas');
const img = document.createElement('img');
img.src = 'img/sprite.png';
canvas.width = '500';
canvas.height='500';

const context = canvas.getContext('2d');

var gradient = context.createLinearGradient(500,470,100,10)
gradient.addColorStop(0,'cyan');
gradient.addColorStop(1,'white');
context.fillStyle = gradient;
context.fillRect(0,0,500,500);
let y =0;

function gameLoop(){
    context.clearRect(0,0,500,50)
     y++;
     const dy = y;
     context.drawImage(img,361,150,100,100,190,dy,100,100);
     window.requestAnimationFrame(gameLoop);

}
gameLoop();