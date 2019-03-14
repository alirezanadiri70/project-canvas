const context = canvas.getContext('2d');
const player1 = new Player (0,0,100,100,context);
const player2 = new Player (100,100,200,200,context); 


function gameLoop(){
    // context.fillstyle = 'blue';
    // context.fillRect(x:100,y:100,w:100,h:100);
    context.clearRect();
    player1.update();
    player1.draw();
    player2.draw();
    window.requestAnimationFrame(gameLoop);

}
gameLoop();