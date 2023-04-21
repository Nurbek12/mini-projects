const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

setInterval(() => {
    const date = new Date();
    hh.style.transform = `rotate(${360 * date.getHours() / 12 - 180}deg)`;
    mm.style.transform = `rotate(${6 * date.getMinutes() - 180}deg)`;
    ss.style.transform = `rotate(${360 * date.getSeconds() / 60 - 180}deg)`;
}, 1000);