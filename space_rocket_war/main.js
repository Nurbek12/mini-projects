var board = document.getElementById('board');
var rocket = document.querySelector('.rocket');
var enemy = document.getElementById('enemy');
let bom = document.createElement('div');
var count = 0;
var score = document.getElementById('score');
window.addEventListener('mousemove',(e)=>{
    rocket.style.left = e.clientX - 10 + 'px';
});
////////////////////////////////=======================================================////////
function attack(){
    var rocketLetf = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
    var bullet = document.createElement('span');
    bullet.classList.add('bullets');
    board.appendChild(bullet);
    bullet.style.left = rocketLetf + 10 + 'px';
    setTimeout(()=>{
        bullet.remove();
    },700);
    setInterval(() => {
        var rocks = document.getElementsByClassName('enemy');
        for(var i=0;i<rocks.length;i++){
            var rock = rocks[i];
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();
            if(
                bulletbound.left >= rockbound.left &&
                bulletbound.right <= rockbound.right &&
                bulletbound.top <= rockbound.top &&
                bulletbound.bottom <= rockbound.bottom
            ){
                rock.parentElement.removeChild(rock);
                bullet.parentElement.removeChild(bullet);
                count++;
            }
        } 
        
    score.innerHTML = `Your Score: ${count}`;
    },1);
}
window.addEventListener('click',attack);
window.addEventListener('keydown',e=>{
    if(e.key == 'ArrowUp'){
        attack();
    }
})
var generateRocks = setInterval(()=>{
    var rock = document.createElement('div');
    var rand = Math.floor(Math.random()*3)+1;
    rock.setAttribute('class','enemy '+('r'+ rand));
    var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left')-50);
    rock.style.left = Math.floor(Math.random()*parseInt(window.getComputedStyle(board).getPropertyValue('width'))) + 'px';
    board.appendChild(rock)
},500);

var moverocks = setInterval(()=>{
    var rocks = document.getElementsByClassName('enemy');
    if(rocks!=undefined){
        for(var i=0;i<rocks.length;i++){
            var rock = rocks[i];
            var rockstop = parseInt(window.getComputedStyle(rock).getPropertyValue('top'));
            if(rockstop>=parseInt(window.getComputedStyle(board).getPropertyValue('height'))-50){
                alert('Game Over, Your Score: ' + count);
                clearInterval(moverocks);
                window.location.reload();
            }
            
            rock.style.top = rockstop + 15 + 'px';
        }
    }
},100)