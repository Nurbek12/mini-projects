const audio = document.getElementById('audio');
const img = document.getElementById('img');
const title = document.getElementById('title');
const bg = document.getElementById('bg');
const play = document.getElementById('play');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const playlist = document.querySelector('.card');
const playlit = document.querySelector('.equ');
const li = document.querySelector('.eq');
const change = document.querySelector('.playli');
const progress = document.querySelector('.progress');
const progressCon = document.querySelector('.progress-container');
var a = document.querySelectorAll('li');
// var d = document.querySelector('.ee');
        for(var i=0;i<a.length;i++){
            a[i].style.animationDelay = Math.random() +'s';
        } 
const musics = [
    'In_Love','Бейба_Судьба','Бощка','Касандра',
    'Красота','Марлборо','Сын','Тамада','Тантра',
    'Текила'
];
var r = [
    '-8px','53px','117px','181px','244px',
    '306px','369px','433px','495px','559px'
]
for(var j=0;j<musics.length;j++){
    change.innerHTML += 
    `<li onclick="loadsong(${j}), playSong(), u(${j})">
    <img src="./img/${musics[j]}.jpg">
    <h2>${musics[j]}</h2></li>`
}
var i = 0;
function u(t){
    i = t;
}
loadsong(i);
console.log(musics[i])
function loadsong(song){
    audio.src = `music/${musics[song]}.mp3`;
    img.src = `img/${musics[song]}.jpg`;
    bg.style.background = `url(img/${musics[song]}-fon.jpg)`;
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundAttachment = "fixed";
    title.innerText = musics[song];
    playlit.style.top = `${r[song]}`;
    // audio.play();
}
function playSong(){
    playlist.classList.add('play');
    // d.classList.add('play');
    playlit.classList.add('play');
    play.querySelector('i.fa').classList.remove('fa-play');
    play.querySelector('i.fa').classList.add('fa-pause');
    audio.play();
}
function pauseSong(){
    li.style.width = "0%";
    playlist.classList.remove('play');
    // d.classList.remove('play');
    playlit.classList.remove('play');
    play.querySelector('i.fa').classList.add('fa-play');
    play.querySelector('i.fa').classList.remove('fa-pause');
    audio.pause();
}
play.addEventListener('click',()=>{
    const isPlaying = playlist.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});
function prevSong(){
    i--;
    if(i < 0){
        i=musics.length-1;
    }
    
    loadsong(i);
    playSong();
}
function nextSong(){
    i++;
    if(i > musics.length -1){
        i=0;
    }
    
    loadsong(i);
    playSong();
}

function updateProgress(e){
    const {duration ,currentTime} = e.srcElement;
    const progPer = (currentTime / duration) * 100;
    progress.style.width = `${progPer}%`;
    if(progPer === 100){
        nextSong();
    }
    // d.style.transform = `scale(${Math.random(.5,1)})`
}
function setProg(e){
    const w = this.clientWidth;
    const c = e.offsetX;
    const d = audio.duration;

    audio.currentTime = (c / w )*d;
}

audio.addEventListener('timeupdate',updateProgress);
progressCon.addEventListener('click',setProg);

prev.addEventListener('click',prevSong);
next.addEventListener('click',nextSong);