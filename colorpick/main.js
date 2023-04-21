const wrapper = document.getElementById('wrapper')
let hbh = false
let hel = null
let btlw = null

const gameArray = [
    [2, 3, 2, 6],
    [5, 2, 6, 3],
    [1, 3, 5, 5],
    [6, 1, 3, 2],
    [5, 1, 1, 6],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function colorPick(n){
    switch(n){
        case 1: return 'red';
        case 2: return 'blue';
        case 3: return 'green';
        case 4: return 'yellow';
        case 5: return 'orange';
        case 6: return 'purple';
        case 7: return 'brown';
    }
}

function water_render(w){
    let l = '';
    for(let i=0;i<w.length;i++){
        if(w[i] === 0){
            continue;
        }else{
            l += `<div class="color ${colorPick(w[i])}"></div>`
        }
    }
    return l;
}

function game_render(){
    wrapper.innerHTML = ''
    for(let i=0;i<gameArray.length;i++){
        wrapper.innerHTML += `<div class="bottle" 
        id="bt${i}" data-number=${i}>
            ${water_render(gameArray[i])}
        </div>`
    }
    
    const btls = document.querySelectorAll('.bottle')
    btls.forEach(b => b.addEventListener('click', e => {
        // hel = e
        BottleHandler(e)
    }));
}

function getPos(el, ps){
    if(ps == 'left'){
        return el.getBoundingClientRect().left;
    }else if(ps == 'top'){
        return el.getBoundingClientRect().top;
    }
}

function enW(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            return i;
        }
    }
    return 4;
}

function cotrolGame(a, b){
    let x1 = enW(gameArray[a]);
    let x2 = enW(gameArray[b]);
    let stp = null;
      if (
        (gameArray[a][x1] !== undefined && gameArray[b][x2] == gameArray[a][x1] && x2 !== 0) ||
        (gameArray[a][x1] !== undefined && x2 === 4)
      ) {
        stp = gameArray[a][x1];
        while(stp === gameArray[a][x1] && x2 !== 0){
          gameArray[b][x2 === 4 ? 3 : x2 - 1] = gameArray[a][x1];
          gameArray[a][x1] = 0;
          x2-=1;
          if(x2 !== 0) x1+=1;
        }
        game_render();
        if(gameWin()){
            alert('You win');
        }
    }
}

function BottleHandler(e){
    // console.log(e.target);
    if(!hbh){
        hel = e.target
        hel.classList.remove('isSwap')
        btlw = parseInt(hel.getAttribute('data-number'))
        e.target.classList.add('isHand')
        hbh = true
    }else{
        const btls = document.querySelectorAll('.bottle')
        // hel.classList.add('isSwap')
        // hel.setAttribute('style', `--x:${getPos(e.target, 'left') - 300}; 
        // --y:${getPos(e.target, 'top') - 300};`)
        cotrolGame(btlw,parseInt(e.target.getAttribute('data-number')));
        btls.forEach(b => b.classList.remove('isHand'))
        hbh = false
        // hel = null
    }
}

function gameWin(){
    let summ = 0;
    for(let i=0;i<gameArray.length;i++){
        for(let j=0;j<4;j++){
            if(gameArray[i][0] == gameArray[i][j]){
                summ++;
            }
        }
    }   
    if(summ == gameArray.length * 4) return true
    return false
}

game_render()





{/* <script src="./vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data: {
                gameArray: [
                    [2, 3, 2, 6],
                    [5, 2, 6, 3],
                    [1, 3, 5, 5],
                    [6, 1, 3, 2],
                    [5, 1, 1, 6],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                hbh: false,
                hel: null,
                btlw: null,
            },
            methods: {
                colorPick(n){
                    switch(n){
                        case 1: return 'red';
                        case 2: return 'blue';
                        case 3: return 'green';
                        case 4: return 'yellow';
                        case 5: return 'orange';
                        case 6: return 'purple';
                        case 7: return 'brown';
                    }
                },
                BottleHandler(e){
                    if(!this.hbh){
                        this.hel = e.target
                        this.hel.classList.remove('isSwap')
                        this.btlw = parseInt(this.hel.getAttribute('data-number'))
                        e.target.classList.add('isHand')
                        this.hbh = true
                    }else{
                        const btls = document.querySelectorAll('.bottle')
                        // hel.classList.add('isSwap')
                        // hel.setAttribute('style', `--x:${getPos(e.target, 'left') - 300}; 
                        // --y:${getPos(e.target, 'top') - 300};`)
                        this.cotrolGame(this.btlw,parseInt(e.target.getAttribute('data-number')));
                        btls.forEach(b => b.classList.remove('isHand'))
                        this.hbh = false
                        // hel = null
                    }
                },
                cotrolGame(a, b){
                    let x1 = this.enW(this.gameArray[a]);
                    let x2 = this.enW(this.gameArray[b]);
                    if(this.gameArray[b][x2] == this.gameArray[a][x1] && x2 !== 0 || x2 === 4){
                        this.gameArray[b][x2 === 4 ? 3 : x2 - 1] = this.gameArray[a][x1];
                        this.gameArray[a][x1] = 0;
                        if(this.gameWin()){
                            alert('You win');
                        }
                    }
                },
                enW(arr){
                    for(let i=0;i<arr.length;i++){
                        if(arr[i] !== 0){
                            return i;
                        }
                    }
                    return 4;
                },
                gameWin(){
                    let summ = 0;
                    for(let i=0;i<this.gameArray.length;i++){
                        for(let j=0;j<4;j++){
                            if(this.gameArray[i][0] == this.gameArray[i][j]){
                                summ++;
                            }
                        }
                    }   
                    if(summ == this.gameArray.length * 4) return true
                    return false
                }
            }
        });
    </script> */}