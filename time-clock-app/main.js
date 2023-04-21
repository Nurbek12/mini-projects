const c = document.getElementById('c');
for (let i = 0; i < 60; i++) {
    c.innerHTML += `<span style="--d:${i};"></span>`
}
const btns = document.querySelectorAll('.navig .btn');
function btnActive(el) {
    btns.forEach(b => b.classList.remove('active'));
    // setTimeout(() => {
    el.classList.add('active');
    // }, 100);
}
btns.forEach(b => {
    b.addEventListener('click', () => btnActive(b));
});
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');
const time = document.getElementById('time');
const stxt = document.getElementById('text');
const tmlscl = document.getElementById('tmlscl');

setInterval(() => {
    const data = new Date();
    const hr = data.getHours();
    const mr = data.getMinutes();
    const sr = data.getSeconds();
    h.style.transform = `rotate(${270 + hr * 6}deg)`;
    m.style.transform = `rotate(${mr * 6}deg)`;
    s.style.transform = `rotate(${sr * 6}deg)`;
    time.innerHTML = `${hr}:${mr >= 10 ? mr : '0' + mr}`
}, 1000);
let secnm;
let txt;
let ms = 0, ss = 0, mss = 0, lap = 0, isrun = false;
function starting() {
    tmlscl.innerHTML = '';
    isrun = true;
    c.classList.remove('clear');
    c.classList.add('run')
    secnm = setInterval(() => {
        mss++;
        if (mss == 59) {
            ss++;
            mss = 0;
        }
        if (ss == 59) {
            ms++;
            ss = 0;
        }
        txt = `${ms >= 10 ? ms : '0' + ms}:${ss >= 10 ? ss : '0' + ss}:${mss >= 10 ? mss : '0' + mss}`
        stxt.innerHTML = txt;
    }, 1)
}
function pauseing() {
    isrun = false;
    c.classList.remove('run');
    clearInterval(secnm);

}
function limiting() {
    if (!isrun) return;
    lap++;
    tmlscl.innerHTML += `
                <div class="item">
                    <h2>${lap}<span>Lap</span> 
                    </h2>
                    <h2>
                        ${txt}
                    </h2>
                </div>`;
    tmlscl.scrollTop = tmlscl.scrollHeight;
}
function reseting() {
    isrun = false;
    c.classList.remove('run');
    c.classList.add('clear');
    clearInterval(secnm);
    ms = 0, ss = 0, mss = 0, lap = 0;
    stxt.innerHTML = '00:00:00';
    tmlscl.innerHTML = '<div class="nonetext">Empty</div>';
}