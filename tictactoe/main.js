const gamearray = [0,0,0, 0,0,0, 0,0,0];
const squares = document.querySelectorAll('.square');
const xw = document.querySelector('#xw');
const ow = document.querySelector('#ow');
const dw = document.querySelector('#dw');
const circ = document.querySelector('.circ');
const xel = '<i class="fa fa-close"></i>';
const oel = '<i class="fa fa-circle-o"></i>';


let xwin = 0;
let owin = 0;
let draw = 0;
let curplay = Math.random() > 0.5 ? 'x' : 'o';

function dispScore(){
    xw.innerHTML = `${xwin} wins`;
    ow.innerHTML = `${owin} wins`;
    dw.innerHTML = `${draw} draws`;
}

function playerChoic(){
    if(curplay === 'x'){
        curplay = 'o';
    }else{
        curplay = 'x';
    }
    circChoic();
}

function circChoic(){
    if(curplay === 'o'){
        circ.classList.remove('isx');
        circ.classList.add('isi');
    }else{
        circ.classList.add('isx');
        circ.classList.remove('isi');
    }
}

function init(){
    clearBoard();
    dispScore();
    circChoic();

}

squares.forEach((sq, i) => {
    sq.addEventListener('click', () => {
        if(sq.innerHTML === ''){
            sq.classList.add('nemp');
            sq.innerHTML = curplay === 'x' ? xel : oel;
            gamearray[i] = curplay;
            isWinning();
            playerChoic();
        }
    });
})

function isWinning(){
    if(findWinner(gamearray) === 'd'){
        draw++;
        if(confirm('Draw. Play Again?')){
            init();
        }
    }
    if(findWinner(gamearray) === true){
        curplay === 'o' ? xwin++ : owin++;
        if(confirm('winner is '+curplay+'. Play Again?')){
            init();
        }
    }
}



function findWinner(arr){
    if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== 0){
        return true;
    }else if(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== 0){
        return true;
    }else if(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== 0){
        return true;
    }else if(arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== 0){
        return true;
    }else if(arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== 0){
        return true;
    }else if(arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== 0){
        return true;
    }else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== 0){
        return true;
    }else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== 0){
        return true;
    }else if(!arr.includes(0)){
        return 'd';
    }else{
        return false;
    }
}

function clearBoard(){
    for(let i=0;i<9;i++){
        gamearray[i] = 0;
    }
    squares.forEach(sq => {
        sq.classList.remove('nemp');
        sq.innerHTML = '';
    })
}

init();