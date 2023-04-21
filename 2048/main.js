const gameboard = document.getElementById('wrapper')
const scoredel = document.querySelector('.record')

const gamearr = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0], 
]

let isgameover = false;
let score = 0;
let [rw, tw, bw, lw] = [false, false, false, false];

function addClassBlock(cl){
    if(cl === 0) return 0;
    if(cl <= 1024) return 'b'+cl;
    if(typeof cl == 'string') return 'ss';
    return 'bb';
}

function renderGame(){
    gameboard.innerHTML = '';
    for(let i=0;i<gamearr.length;i++){
        for(let j=0;j<gamearr[i].length;j++){
            let bl = gamearr[i][j];
            gameboard.innerHTML += 
            `<div class="block ${addClassBlock(bl)}">${bl==0?'':bl}</div>`
        }
    }
}

function addRandomBlock(){
    if(isgameover) return;
    try{
        let x = Math.floor(Math.random()*4);
        let y = Math.floor(Math.random()*4);
        if(gamearr[y][x] == 0){
            gamearr[y][x] = 2;
        }else{
            addRandomBlock();
        }
    }catch(err){
        isgameover = true;
    }
}

function gameOver(){
    gamearr[0][0] = 'G';
    gamearr[0][1] = 'A';
    gamearr[0][2] = 'M';
    gamearr[0][3] = 'E';
    gamearr[1][0] = 'O';
    gamearr[1][1] = 'V';
    gamearr[1][2] = 'E';
    gamearr[1][3] = 'R';
    gamearr[2][0] = '0';
    gamearr[2][1] = '0';
    gamearr[2][2] = '0';
    gamearr[2][3] = '0';
    gamearr[3][0] = '0';
    gamearr[3][1] = '0';
    gamearr[3][2] = '0';
    gamearr[3][3] = '0';
    renderGame();
    addEventListener('keydown', e => {
        if(e.key.toLocaleLowerCase() == 'r'){
            window.location.reload();
        }
    })
}

function controlGameRight(){
    for(let i=0;i<gamearr.length;i++){
        for(let j=gamearr[i].length-1;j>=0;j--){
            let bl = gamearr[i][j];
            if(j < 3 && gamearr[i][j] !== 0){
                let a = j;
                while(a < 3 && (gamearr[i][a + 1] == 0 || gamearr[i][a+1] == bl)){
                    gamearr[i][a] = 0;
                    if(gamearr[i][a + 1] == bl && gamearr[i][a + 1] !== 0){
                        upscore(2*bl);
                    }
                    gamearr[i][a + 1] = (gamearr[i][a + 1] == bl && gamearr[i][a + 1] !== 0)?2*bl:bl;
                    rw = true;
                    a++;
                }
            }
        }
    }
}

function controlGameLeft(){
    for(let i=0;i<gamearr.length;i++){
        for(let j=0;j<gamearr[i].length;j++){
            let bl = gamearr[i][j];
            if(j > 0 && gamearr[i][j] !== 0){
                let a = j;
                while(a > 0 && (gamearr[i][a - 1] == 0 || gamearr[i][a-1] == bl)){
                    gamearr[i][a] = 0;
                    if(gamearr[i][a - 1] == bl && gamearr[i][a - 1] !== 0){
                        upscore(2*bl);
                    }
                    gamearr[i][a - 1] = (gamearr[i][a - 1] == bl && gamearr[i][a - 1] !== 0)?2*bl:bl;
                    lw = true;
                    a--;
                }
            }
        }
    }
}

function controlGameDown(){
    for(let i=gamearr.length-1;i>=0;i--){
        for(let j=gamearr[i].length-1;j>=0;j--){
            let bl = gamearr[i][j];
            if(i < 3 && (gamearr[i+1][j] == gamearr[i][j] || gamearr[i+1][j] == 0)){
                let a = i;
                while(a < 3 && (gamearr[a+1][j] == 0 || gamearr[a+1][j] == bl)){
                    gamearr[a][j] = 0;
                    if(gamearr[a+1][j] == bl && gamearr[a+1][j] !== 0){
                        upscore(2*bl);
                    }
                    gamearr[a+1][j] = (gamearr[a+1][j] == bl && gamearr[a+1][j] !== 0)?2*bl:bl;
                    bw = true;
                    a++;
                }
            }
        }
    }
}

function controlGameUp(){
    for(let i=0;i<gamearr.length;i++){
        for(let j=0;j<gamearr[i].length;j++){
            let bl = gamearr[i][j];
            if(i>0 && gamearr[i][j] !== 0){
                let a = i;
                while(a > 0 && (gamearr[a-1][j] == 0 || gamearr[a-1][j] == bl)){
                    gamearr[a][j] = 0;
                    if(gamearr[a-1][j] == bl && gamearr[a-1][j] !== 0){
                        upscore(2*bl);
                    }
                    gamearr[a-1][j] = (gamearr[a-1][j] == bl && gamearr[a-1][j] !== 0)?2*bl:bl;
                    tw = true;
                    a--;
                }
            }
        }
    }
}

document.addEventListener('keydown', e => {
    if(isgameover){
        gameOver();
        return;
    }
    if(e.keyCode == 40){
        controlGameDown();
        if(bw){
            addRandomBlock();
            renderGame();
            bw = false;
        }
    }else if(e.keyCode == 38){
        controlGameUp();
        if(tw){
            addRandomBlock();
            renderGame();
            tw = false;
        }
    }else if(e.keyCode == 37){
        controlGameLeft();
        if(lw){
            addRandomBlock();
            renderGame();
            lw = false;
        }
    }else if(e.keyCode == 39){
        controlGameRight();
        if(rw){
            addRandomBlock();
            renderGame();
            rw = false;
        }
    }
})

function upscore(sc){
    if(sc > score){
        score = sc;
        scoredel.innerHTML = 'record: '+score;
    }
    if(score == 2048){
        if(confirm('You win reload or continue?')){
            window.location.reload();
        }
    }
}

addRandomBlock();
addRandomBlock();
renderGame();