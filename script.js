score= 0;
cross=true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);


document.onkeydown =function(event){
    console.log("Key Code is: ",event.keyCode)
    if(event.keyCode==38){
        thor =document.querySelector('.thor');
        thor.classList.add('animateThor');
        setTimeout(()=>{
           thor.classList.remove('animateThor')
        },700);
    }
    if (event.keyCode == 39) {
        thor = document.querySelector('.thor');
        thorX = parseInt(window.getComputedStyle(thor, null).getPropertyValue('left'));
        thor.style.left = thorX + 112 + "px";
    }
    if (event.keyCode == 37) {
        thor = document.querySelector('.thor');
        thorX = parseInt(window.getComputedStyle(thor, null).getPropertyValue('left'));
        thor.style.left = (thorX - 112) + "px";
    }


}



setInterval(() => {
    thor = document.querySelector('.thor');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(thor, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(thor, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility ='visible'
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }

    else  if (offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross =true
        }, 1000);
    
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));//Heare Float vale taken due to accurate animation result 
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 500);
}

},10);



function updateScore(score){
    scoreCont.innerHTML = "YOUR SCORE : " +score
}