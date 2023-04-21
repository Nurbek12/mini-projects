const board = document.getElementById('board');
const game = document.getElementById('game');

const stones = [
    {
        color:0,
        posX:75,
        posY:0,
        vis:true,
    },
    {
        color:0,
        posX:225,
        posY:0,
        vis:true,
    },
    {
        color:0,
        posX:375,
        posY:0,
        vis:true,
    },
    {
        color:0,
        posX:525,
        posY:0,
        vis:true,
    },
    {
        color:0,
        posX:0,
        posY:75,
        vis:true,
    },
    {
        color:0,
        posX:150,
        posY:75,
        vis:true,
    },
    {
        color:0,
        posX:300,
        posY:75,
        vis:true,
    },
    {
        color:0,
        posX:450,
        posY:75,
        vis:true,
    },
    {
        color:0,
        posX:75,
        posY:150,
        vis:true,
    },
    {
        color:0,
        posX:225,
        posY:150,
        vis:true,
    },
    {
        color:0,
        posX:375,
        posY:150,
        vis:true,
    },
    {
        color:0,
        posX:525,
        posY:150,
        vis:true,
    },
// ssssssssssssssssssssssssssssssssssssssssssssssss
    {
        color:1,
        posX:0,
        posY:375,
        vis:true,
    },
    {
        color:1,
        posX:150,
        posY:375,
        vis:true,
    },
    {
        color:1,
        posX:300,
        posY:375,
        vis:true,
    },
    {
        color:1,
        posX:450,
        posY:375,
        vis:true,
    },
    {
        color:1,
        posX:75,
        posY:450,
        vis:true,
    },
    {
        color:1,
        posX:225,
        posY:450,
        vis:true,
    },
    {
        color:1,
        posX:375,
        posY:450,
        vis:true,
    },
    {
        color:1,
        posX:525,
        posY:450,
        vis:true,
    },
    {
        color:1,
        posX:0,
        posY:525,
        vis:true,
    },
    {
        color:1,
        posX:150,
        posY:525,
        vis:true,
    },
    {
        color:1,
        posX:300,
        posY:525,
        vis:true,
    },
    {
        color:1,
        posX:450,
        posY:525,
        vis:true,
    },
]
for(var i=0;i<64;i++){
    board.innerHTML += `<div class="bord ${isBlackSquareAt(i)?'black':'white'}"></div>`
}
function isBlackSquareAt(coord){
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}

class Stone{
    constructor(cl,px,py){
        this.cl = cl;
        this.px = px + 37.5;
        this.py = py + 37.5;
        this.pb = false;
    }
    inner(){
        const player = document.createElement('div');
        player.setAttribute('id','stone');
        player.setAttribute('class','off');
        player.setAttribute('style',`--x:${this.px}; --y:${this.py}; z-index: 99999999;`);
        //  dfdsfsdfsd fsdf sdf sdfs
        const contro = document.createElement('div');
        contro.setAttribute('id','contro');
        //  dfdsfsdfsd fsdf sdf sdfs
        const dd1 = document.createElement('div');
        dd1.setAttribute('id','dd');        
        dd1.setAttribute('style','--r:-45;');
        dd1.onclick = () => {
            player.classList.add('off');
            this.pb = false;
            this.px += 75;
            this.py += 75;
            player.setAttribute('style',`--x:${this.px}; --y:${this.py};`);
        };
        
        const dd2 = document.createElement('div');
        dd2.setAttribute('id','dd');        
        dd2.setAttribute('style','--r:45;');
        dd2.onclick = () => {
            player.classList.add('off');
            this.pb = false;
            this.px += -75;
            this.py += 75;
            player.setAttribute('style',`--x:${this.px}; --y:${this.py};`);
        };
        
        const dd3 = document.createElement('div');
        dd3.setAttribute('id','dd');        
        dd3.setAttribute('style','--r:135;');
        dd3.onclick = () => {
            player.classList.add('off');
            this.pb = false;
            this.px += -75;
            this.py += -75;
            player.setAttribute('style',`--x:${this.px}; --y:${this.py};`);
        };
        
        const dd4 = document.createElement('div');
        dd4.setAttribute('id','dd');        
        dd4.setAttribute('style','--r:-135;');
        dd4.onclick = () => {
            player.classList.add('off');
            this.pb = false;
            this.px += 75;
            this.py += -75;
            player.setAttribute('style',`--x:${this.px}; --y:${this.py};`);
        };
        //  dfdsfsdfsd fsdf sdf sdfs
        const play = document.createElement('div');
        play.setAttribute('id','play');        
        play.classList.add(`${this.cl==1?'white':'black'}`);
        play.addEventListener('click',() => {
            if(this.pb){
                player.classList.add('off');
                this.pb = false;
            }else{
                player.classList.remove('off');
                this.pb = true;
            }
        })
        //adasdasdasdasdasdasdasa dad asd 
        contro.appendChild(dd1);
        contro.appendChild(dd2);
        contro.appendChild(dd3);
        contro.appendChild(dd4);

        player.appendChild(contro);
        player.appendChild(play);
        return player;
    }
}
stones.forEach(stone=>{
    const st = new Stone(stone.color,stone.posX,stone.posY);
    game.appendChild(st.inner());
})
