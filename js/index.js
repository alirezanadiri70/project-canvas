// const canvas = document.querySelector('canvas');
// const img = document.createElement('img');
// img.src = 'img/sprite.png';
// canvas.width = '500';
// canvas.height='500';

// const context = canvas.getContext('2d');
// class Player {
//      x = 361;
//      y = 150;
//      w = 100;
//      h = 100;
//      sx = 190;
//      sy = 80;
//      sw = 100;
//      sh = 100;
//      constructor(x,y,w,h){
//           this.x = x;
//           this.y = y;
//           this.w = w;
//           this.h = h;
//           console.log('run once')
//      }
//      draw() { 
//           context.drawImage(
//                img,
//                this.sx,this.sy,this.sw,this.sh,
//                this.x,this.y,this.w,this.h
//                );
//      }
//      update(){
//           this.y++;
//           if (this.y > 500)
//               this.y = 0;
//           }
//           this.w++;
//           if (this.w > 200){
//                this.w = 20;
//           }
//      }
     
// }

// let y =0;
// const bird = new Player (100,100,80,70);
// const bird2 = new Player (300,100,160,140);
// const bird3 = new Player (300,100,160,140)

// function gameLoop(){
//      context.clearRect(0,0,500,500)
//      var gradient = context.createLinearGradient(500,470,100,10)
//      gradient.addColorStop(0,'cyan');
//      gradient.addColorStop(1,'white');
//      context.fillStyle = gradient;
//      context.fillRect(0,0,500,500);
//      y++;
//      const dy = y;
//      context.drawImage(img,this.x,this.y,this.w,this.h,this.sx,this.sy,this.sw,this.sh);
//      window.requestAnimationFrame(gameLoop);
     

// }
// gameLoop();
const height = 640;
const width = 360;
const canvas = document.querySelector('canvas');
canvas.style.border = '2px solid black';
canvas.height = height;
canvas.width = width;
const img = document.createElement('img');
img.src = './sprite.png'
