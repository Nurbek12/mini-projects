const sendBtn = document.getElementById('send');
const chatBox = document.querySelector('.chat-box');
const mess = document.getElementById('mess');

function sendMess() {
    if(mess.value != ''){
        chatBox.innerHTML += `<div class="mess">
            <p class="outc">${mess.value}</p>
        </div>`;
        mess.value = "";
        setTimeout(()=>{
            chatBox.scrollTop = chatBox.scrollHeight;
        },100)
    }
}

mess.addEventListener('keyup', e =>{
    if(e.key == 'Enter'){
        sendMess();
    }
})

sendBtn.addEventListener('click', sendMess);