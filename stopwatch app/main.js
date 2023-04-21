let s = 0;
let m = 0; 
let h = 0; 
let interv;

function start(b){
    interv = setInterval(() => {
        if(s == 60){
            m++;
            s=0;
        }
        if(m == 60){
            h++;
            m=0;
        }
        dispTimer(s, m, h);
        s++;
    }, 1);
}

function stopWatch(){
    clearInterval(interv);
}

function resetTime(){
    clearInterval(interv);
    s = 0;
    m = 0; 
    h = 0;
    document.getElementById('time').innerHTML = '00:00:00';
}

function dispTimer(a,b,c){
    document.getElementById('time').innerHTML = 
    `${wt(c)}:${wt(b)}:${wt(a)}`
}

function wt(n){
    return `${n>=10?n:'0'+n}`;
}