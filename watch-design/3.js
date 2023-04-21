var clock = document.getElementById('ccc');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');
setInterval(()=>{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secn = date.getSeconds();
    hh.style.transform = `rotate(${6*hour}deg)`;
    mm.style.transform = `rotate(${6*minute}deg)`;
    ss.style.transform = `rotate(${secn}deg)`;
    console.log(secn);
    clock.innerHTML = `${hour >= 10 && hour-12 >= 10 ? '' : '0'}${hour > 12 ? hour - 12 : hour}:${minute >= 10 ? '' : '0'}${minute} ${hour > 12 ? 'AM' : 'PM'}`;
},1000)
var a = document.getElementById('f')
for(var i=0;i<60;i++){
    a.innerHTML += `<span style="--i:${i};"></span>`
}