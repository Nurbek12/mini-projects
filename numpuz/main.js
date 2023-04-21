let gamearr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const gameboard = document.getElementById('board');
const timeel = document.getElementById('time');

let timeint;
let endtime = '00:00';

function shuffle(){
    for(let i=0;i<gamearr.length; i++){
        var rnd = Math.floor(Math.random()*(i+1))
        // console.log(i, rnd);
        var temp = gamearr[i]
        gamearr[i] = gamearr[rnd]
        gamearr[rnd] = temp
    }
}

function rendergame(){
    gameboard.innerHTML = '';
    for(let i=0; i<gamearr.length; i++){
        gameboard.innerHTML += 
        `<div class="nump ${gamearr[i]==0&&'empty'}" onclick="movenum(${i})">${gamearr[i]}</div>`;
    }
}

function wingame(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    for(let i=0; i<gamearr.length; i++){
        if(gamearr[i] === arr[i]){
            continue;
        }else{
            return false;
        }
    }
    return true
}

function movenum(ind){
    ind = parseInt(ind);
    if(gamearr[ind] === 0) return;
    if(ind > 3 && gamearr[ind - 4] === 0){
        let temp = gamearr[ind];
        gamearr[ind] = 0;
        gamearr[ind - 4] = temp;
        rendergame();
    }else if(ind > 0 && gamearr[ind - 1] === 0 && ind % 4 !== 0){
        let temp = gamearr[ind];
        gamearr[ind] = 0;
        gamearr[ind - 1] = temp;
        rendergame();
    }else if(ind < 16 && gamearr[ind + 1] === 0 && (ind + 1)% 4 !== 0){
        let temp = gamearr[ind];
        gamearr[ind] = 0;
        gamearr[ind + 1] = temp;
        rendergame();
    }else if(ind < 12 && gamearr[ind + 4] === 0){
        let temp = gamearr[ind];
        gamearr[ind] = 0;
        gamearr[ind + 4] = temp;
        rendergame();
    }
    if(wingame()){
        clearInterval(timeint);
        gameboard.classList.add('showtext');
        gameboard.setAttribute('data-text', `You win. Your time is ${endtime}`);
    }
}

function showtime(){
    let a = 0, b = 0;
    timeint = setInterval(() => {
        endtime = `${a >= 10 ? a : '0' + a}:${b >= 10 ? b : '0' + b}`;
        timeel.innerHTML = endtime;
        b++;
        if(b > 60){
            b = 0;
            a++;
        }
    }, 1000);
}

function init(){
    showtime();
    shuffle();
    rendergame();
}

init();