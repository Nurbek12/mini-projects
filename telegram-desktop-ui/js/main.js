const messBox = document.getElementById('mess-box');
const scrlBox = document.getElementById('box');
const messTxt = document.getElementById('text-mess');
const alertBox = document.getElementById('alertBox');
const smiles = [
    '😀','😃','😄','😁','😆','😅','😂','😊','😇',
    '🙂','🙃','😉','😌','😍','🥰','😘','😗','😙',
    '😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓',
    '😎','🤩','🥳','😏','😒','😞','😔','😟','😕',
    '🙁','☹️','😣','😖','😫','😩','🥺','😢','😭',
    '😤','😠','😡','🤬','🤯','😳','🥵','🥶','😶',
    '😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫',
    '🤥','😶','😐','😑','😬','🙄','😯','😦','😧',
    '😮','😲','🥱','😴','🤤','😪','😮','😵','😵',
    '🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑',
    '🤠','😈','👿','👹','👺','🤡','💩','👻','💀',
    '☠️','👽','👾','🤖','🎃','😺','😸','😹','😻',
    '😼','😽','🙀','😿','😾','🤲','👐','🙌','👏',
    '🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️',
    '🤟','🤘','👌','🤏','👈','👉','👆','👇','☝️','✋',
    '🤚','🖐','🖖','👋','🤙','💪','🦾','🖕','✍️','🙏',
    '🦶','🦵','🦿','💄','💋','👄','🦷','👅','👂','🦻','👃',
    '👣','👀','👤','👥','👶','👧','🧒','👦','👩','🧑','👨',
    '👩‍🦱','🧑','👨‍🦱','👩‍🦰','🧑','👦','👱‍♀️','👱','👱‍♂️','👩‍🦳','🧑',
    '👨‍🦳','👩‍🦲','🧑','👨‍🦲','🧔','🧔','🧔','👵','👴','👲','👳‍♀️',
    '👳','👳‍♂️','🧕','👮‍♀️','👮','👮‍♂️','👷‍♀️','💂‍♀️','🕵️‍♀️','👩‍⚕️','🧑',
    '🧶','🧵','🧥','🥼','🦺','👚','👕','👖','🩲','🩳','👔',
    '👗','👙','🩱','👘','🥻','🥿','👠','👡','👢',
    '👞','👟','🥾','🧦','🧤','🧣','🎩','🧢','👒','🎓','🥽','🌂',
]
var i = 0;

function classTogg(el, bl, cl){
    if(bl){
        document.getElementById(el).classList.add(cl)
    }else{
        document.getElementById(el).classList.remove(cl)
    }
}
function classToggFor2(el1, bl1, cl1, el2, bl2, cl2){
    if(bl1){
        document.getElementById(el1).classList.add(cl1)
    }else{
        document.getElementById(el1).classList.remove(cl1)
    }
    if(bl2){
        document.getElementById(el2).classList.add(cl2)
    }else{
        document.getElementById(el2).classList.remove(cl2)
    }
}
function classToggl(el, cl){
    document.getElementById(el).classList.toggle(cl)
}
function clearAlert(){
    alertBox.innerHTML = "";
}
function alertMess(message = "hello"){
    const sound = new Audio('../sounds/telegram_desktop.mp3');
    const mess = document.createElement('div');
    mess.classList.add('alerts');
    mess.innerHTML = `<div class="img-box">
                        <img src="./img/users/0.jpg">
                    </div>
                    <div class="content">
                        <div class="username">username</div>
                        <span class="message">${message.substring(0, 15)}...</span>
                    </div>`;
    sound.play();
    alertBox.appendChild(mess);
    setTimeout(() => {
        alertBox.scrollTop = alertBox.scrollHeight;
    }, 100)
    setTimeout(() => {
        mess.remove();
    }, 10000);
    i++;
}
function getTime(){
    const date = new Date();
    return `${date.getHours() >= 10 ? date.getHours() : '0'+date.getHours()}:${date.getMinutes() >= 10 ? date.getMinutes() : '0'+date.getMinutes()}`;
}
function SendMessage(b){
    i++;
    if(!messTxt.value){
        return;
    }
    messBox.innerHTML += `
        <div class="message ${b?'you':'other'}" id="messs${i}">
            <p class="text">${messTxt.value.trim()}
                <span class="time">${getTime()}</span>
            </p>
        </div>`;
    if(!b){
        alertMess(messTxt.value);
    }
    messTxt.value = "";
    messTxt.focus();
    SendIcon();
    classTogg('smiles',false,'open');
    setTimeout(() => {
        scrlBox.scrollTop = scrlBox.scrollHeight;
    }, 10);
}
function writeSmile(t){
    messTxt.value+=`${t}`;
    messTxt.focus();
    SendIcon();
}
function SendIcon(){
    if(messTxt.value){
        document.getElementById('sendingIcon').classList.remove('fa-microphone');
        document.getElementById('sendingIcon').classList.add('fa-send');
    }else{
        document.getElementById('sendingIcon').classList.remove('fa-send');
        document.getElementById('sendingIcon').classList.add('fa-microphone');
    }
}
function scrollElementVisible(el1, el2, cl, ifn){
    var dump = null;
    document.querySelector(el1).addEventListener('scroll', e => {
        if(ifn === 'up'){
            dump = e.target.scrollTop > 100;
        }else if(ifn === 'down'){
            dump = e.target.scrollHeight - e.target.scrollTop > 600;
        }
        document.querySelector(el2).classList.toggle(cl, dump)
    });
}
function scrollElementClear(el1, cn){
    if(cn !== 0){
        cn = document.querySelector(el1).scrollHeight;
    }
    document.querySelector(el1).scrollTop = cn;
}
messTxt.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        SendMessage(true)
    }
});
messTxt.addEventListener('dblclick', () => {
    SendMessage(false)
});
messTxt.addEventListener('input', () => {
    SendIcon();
});
smiles.forEach(s => {
    document.getElementById('smiles').innerHTML += `<span class="smile" onclick="writeSmile('${s}')">${s}</span>`
});
messTxt.focus();
scrollElementVisible('.users','.users-up','visib', 'up');
scrollElementVisible('.chat-box','.chat-up-btn','visib', 'down');
scrlBox.scrollTop = scrlBox.scrollHeight;