var draw = document.querySelector('.timer');
for(var i=0;i<60;i++){
    draw.innerHTML += '<span style="--i:'+(i+1)+';"></span>';
}
var time = document.getElementById('time');
var second = 0;
var minut = 0;
var hours = 0;
var inter;
var l = 0;
document.getElementById('start').onfocus = function(){
    document.querySelector('.circle').classList.add('run');
    inter = setInterval(()=>{
        second++;
        if(second<10){
            var seconds='0'+second;
        }else{
            seconds = second;
        }
        if(second==60){
            second=0;
            minut++;
        }
        if(minut<10){
            var minuts = '0'+minut;
        }else{
            minuts = minut;
        }
        if(minut==60){
            minut=0;
            hours++;
        }
        if(hours<10){
            var hour='0'+hours;
        }else{
            hour = hours
        }
        time.innerHTML = `${hour}:${minuts}:${seconds}`
    },1);
    document.querySelector('.circ').onclick = function(){
        document.querySelector('.control ul').innerHTML += `
        <li>
            <span class="delete"><i class="fa fa-close"></i></span>
            <span>Lap 2</span>
            <h4 id="txt">${hours}:${minut}:${second}</h4>
        </li>
        `
        l++;
    }
}
document.getElementById('reset').onclick = function(){
    document.querySelector('.circle').classList.remove('run');
    clearInterval(inter);
}
document.getElementById('add').onclick = function(){
    document.querySelector('.form').style.display = 'flex';
}
var i = 1;
var bool = true;
document.getElementById('adder').onclick = function(){
    var mn = document.getElementById('mn').value;
    var hr = document.getElementById('hr').value;
    var sel = document.getElementById('selc').value;
    var day = document.getElementById('day').value;
    document.querySelector('.ul').innerHTML +=
    `
    <li>
        <div class="content">
            <span>Alarm ${i}</span>
            <h2>${((hr<10) ? '0' : '') + hr}:${((mn<10) ? '0' : '') + mn} <b>${sel}</b></h2>
            <h4>${day}</h4>
        </div>
        <div id="toggle" class='c'">
            <div class="main"></div>
        </div>
    </li>
    `
    document.getElementById('hh').style.transform = `translate(0px,-15px) rotate(${30*hr}deg)`
    document.getElementById('mm').style.transform = `translate(0px,-15px) rotate(${6*mn}deg)`
    document.querySelector('.form').style.display = 'none';
    i++;
    
    var a = document.querySelectorAll('div.c')
    // a.addEventListener('click',()=>{
    //     a.classList.toggle('active');
    // });
    for(var j=0;j<a.length;j++){
        a[j].addEventListener('click',()=>{
            if(bool){
                this.classList.add('active');
                bool = false;
                console.log(bool);
            }else{
                this.classList.remove('active');
                bool = true;
                console.log(bool);
            }
        });
    };
}