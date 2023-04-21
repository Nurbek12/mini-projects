const play = document.getElementById('play')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const audio = document.getElementById('audio')
const img = document.getElementById('img')
const sing = document.getElementById('singer')
const songname = document.getElementById('songname')
const ifa = document.querySelector('#play .fa')
const line = document.getElementById('line')
const crc = document.getElementById('crc')
const list = document.getElementById('list')
const musics = [
    {
        songs:'No Me Conoce',
        singer:'Jhay Cortez ft. J Balvin',
        music:'J Balvin & Bad Bunny - No Me Conoce (Remix)',
        image:'jhay-cortez'
    },
    {
        songs:'Tamada',
        singer:'Miyagi & Endshpil',
        music:'MiyaGi & Эндшпиль –  ты мне дашь словоты мне дашь',
        image:'IMG_20201029_184918_111'
    },
    {
        songs:'Expiration',
        singer:'Daramah',
        music:'Expiration',
        image:'artworks-000084199785-0hssgs-t500x500'
    }
]
var index = 0
loadsong(index)
function loadsong(song){
    audio.src = `../music/${musics[song].music}.mp3`
    img.style.background = `url(../img/${musics[song].image}.jpg)`
    img.style.backgroundSize = "cover"
    img.style.transition = ".2s"
    sing.innerHTML = musics[song].singer
    songname.innerHTML = musics[song].songs
    audio.play()
    // playsong()
}
function playsong(){
    const isPlaying = document.querySelector('.container').classList.contains('play');
    if(isPlaying){
        ifa.classList.remove('fa-pause');
        ifa.classList.add('fa-play')
        document.querySelector('.container').classList.remove('play')
        audio.pause()
    }else{
        ifa.classList.add('fa-pause');
        ifa.classList.remove('fa-play')
        document.querySelector('.container').classList.add('play')
        audio.play()
    }
}
function peevsong(){
    index--
    if(index<0){
        index = musics.length-1
    }
    loadsong(index)
}
function nextsong(){
    index++
    if(index > musics.length-1){
        index = 0
    }
    loadsong(index)
}
function progress(e){
    const {duration, currentTime} = e.srcElement
    const progPer = (currentTime / duration) * 100
    line.style.strokeDashoffset = `${625 - (625*progPer)/100}px`
    crc.style.transform = `rotate(${(360*progPer)/100}deg)`
}
// for(var i=0;i<musics.length;i++){
//     list.innerHTML += 
//     `
//     <div class="send" style="--i:${i+1}"></div>
//     `
// }
function setProg(e){
    const w = this.clientWidth;
    const c = e.offsetX;
    const d = audio.duration;

    audio.currentTime = (c / w )*d;
}
line.addEventListener('click',setProg);
play.addEventListener('click', playsong)
next.addEventListener('click', nextsong)
audio.addEventListener('timeupdate',progress)
audio.addEventListener('ended',nextsong)
prev.addEventListener('click',peevsong)