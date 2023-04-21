var sec = document.querySelector('section');
var color = ['#7530ff','#ffbe00','#ff6969','#369fff','#e5958e',
'#fdb095','#210440','#2c1654','#ff6464','#00be65','#fdbf50',
'#abc270','#fec868','#fda769','#463c33','#432344','#ff2525','#e7eef8','#ddc03d'];
document.addEventListener('keyup',(e)=>{
    // if(e.key == 'a'){
    //     ac('A');
    // }
    switch(e.key){
        case 'a': ac('A'); break;
        case 'b': ac('B'); break;
        case 'c': ac('C'); break;
        case 'd': ac('D'); break;
        case 'e': ac('E'); break;
        case 'f': ac('F'); break;
        case 'g': ac('G'); break;
        case 'h': ac('H'); break;
        case 'i': ac('I'); break;
        case 'j': ac('J'); break;
        case 'k': ac('K'); break;
        case 'l': ac('L'); break;
        case 'm': ac('M'); break;
        case 'n': ac('N'); break;
        case 'o': ac('O'); break;
        case 'p': ac('P'); break;
        case 'q': ac('Q'); break;
        case 'r': ac('R'); break;
        case 's': ac('S'); break;
        case 't': ac('T'); break;
        case 'u': ac('U'); break;
        case 'v': ac('V'); break;
        case 'w': ac('W'); break;
        case 'x': ac('X'); break;
        case 'y': ac('Y'); break;
        case 'z': ac('Z'); break;
        case '1': ac('1'); break;
        case '2': ac('2'); break;
        case '3': ac('3'); break;
        case '4': ac('4'); break;
        case '5': ac('5'); break;
        case '6': ac('6'); break;
        case '7': ac('7'); break;
        case '8': ac('8'); break;
        case '9': ac('9'); break;
        case '0': ac('0'); break;
    }
});

function ac(i){
    var ax = Math.random()*parseInt(window.getComputedStyle(sec).getPropertyValue('width'));
    var ay = Math.random()*parseInt(window.getComputedStyle(sec).getPropertyValue('height'));
    var ca = Math.floor(Math.random()*color.length);
    // console.log(ca)
    // console.log(ax)
    // console.log(ay)
    var sp = document.createElement('span');
    sp.innerHTML=i;
    sp.setAttribute('style',`top:${ay}px; left:${ax}px; color:${color[ca]}33`);
    sec.appendChild(sp);
    setTimeout(()=>{
        sp.remove();
    },1000)
}