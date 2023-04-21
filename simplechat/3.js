var messbox = document.getElementById('box')
var btn = document.getElementById('btn')
var typ = document.querySelector('h2 span')
var view = document.getElementById('chatview')

function acc(){
    if(document.getElementById('mess').value != ''){
        var messtext = document.getElementById('mess')
        var date = new Date()
        var hr = date.getHours()
        var mn = date.getMinutes()
        var day = date.getDay()
        var answer = 'sorry'
        messbox.innerHTML += `<h3 class="user">${messtext.value}<span>${hr}:${mn}</span></h3>`
        var dayname = ''
                switch(day){
                    case 1: dayname = 'Monday'; break;
                    case 2: dayname = 'Tuesday'; break;
                    case 3: dayname = 'Wednesday'; break;
                    case 4: dayname = 'Thursday'; break;
                    case 5: dayname = 'friday'; break;
                    case 6: dayname = 'saturday'; break;
                    case 7: dayname = 'sunday'; break;
                }
        switch(messtext.value){
            case 'how are you' : answer = 'i am fine ✌✌✌'; break;
            case 'what is your name' : answer = 'my name is Dima😜'; break;
            case 'what is the html' : answer = 'Hypertext Markup Language'; break;
            case 'what is the php' : answer = 'Hypertext Proccesser'; break;
            case 'what is the css' : answer = 'Cascading Style Sheets'; break;
            case 'what is the javascript' : answer = 'JavaScript is dinamic programming language'; break;
            case 'hi' : answer = 'hi bro'; break;
            case 'what day is it today' :answer = `day it is the ${dayname}`; break;
            case 'hello' :answer = `hello`; break;
            case 'you are beautiful' :answer = `😎😎😎 yeah it's me`; break;
            case 'ok' :answer = `👌👌👌`; break;
            case 'i love Vue.js' :answer = `❤❤❤`; break;
            case 'you are a crazy' :answer = `😑😡😡`; break;
            case 'i dont like c++' :answer = `☹`; break;
            case 'weather is cold' :answer = `yeah 🥶`; break;
            case 'weather is hot' :answer = `yeah 🥵`; break;
            case 'hmm' :answer = `😁😁`; break;
            case 'hey you are not Designer' :answer = `😂😂 no bro`; break;
            //😃😱😪 case 'how are you' : answer = 'i am fine'; break;
        }
        setTimeout(()=>{
            typ.textContent = "печатает.."
        },1000)
        setTimeout(()=>{
            typ.textContent = 'в сети'
            messbox.innerHTML += `<h3 class="answer">${answer}<span>${hr}:${mn}</span></h3>`
        },2000)
        messtext.value = '';
        view.scrollIntoView(true);
        
    }
}
btn.addEventListener('click',acc);
document.getElementById('mess').addEventListener('keypress',e=>{
    if(e.key == 'Enter'){
        acc();
    }
})