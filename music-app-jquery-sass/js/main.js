var musics = [
    {
        title:"Sky High",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162827_039.jpg",
        imh:"/grp/IMG_20210613_162849_786.jpg",
        year: 2019,
        srcm:'/musics/Sky_High.mp3',
        lovethis:false,
    },
    {
        title:"Butterfly",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162831_649.jpg",
        imh:"/grp/Screenshot_20210624-003236_Instagram.jpg",
        year: 2020,
        srcm:'/musics/Butterfly.m4a',
        lovethis:false,
    },
    {
        title:"Limites",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162834_253.jpg",
        imh:"/grp/Screenshot_20210628-092005_Instagram.jpg",
        year: 2017,
        srcm:'/musics/Limitless.m4a',
        lovethis:false,
    },
    {
        title:"Vision",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162840_679.jpg",
        imh:"/grp/Screenshot_20210628-092112_Instagram.jpg",
        year: 2019,
        srcm:'/musics/Vision.m4a',
        lovethis:false,
    },
    {
        title:"Desire",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162843_780.jpg",
        imh:"/grp/Screenshot_20210628-092359_Instagram.jpg",
        year: 2020,
        srcm:'/musics/Desire.mp3',
        lovethis:false,
    },
    {
        title:"Close To You",
        artist:"Electromaina",
        img:"/grp/IMG_20210613_162846_193.jpg",
        imh:"/grp/Screenshot_20210628-092411_Instagram.jpg",
        year: 2018,
        srcm:'/musics/Close_To_You.m4a',
        lovethis:false,
    },
    {
        title:"Glimmer",
        artist:"Electromaina",
        img:"/grp/b88c3e983449bc721a24b.jpg",
        imh:"/grp/Screenshot_20210628-092357_Instagram.jpg",
        year: 2020,
        srcm:'/musics/Glimmer.mp3',
        lovethis:false,
    }
]
let audios = new Audio();
musics.forEach((music,i)=>{
    var a = 
    `<li id="music" onclick="MusicPlay(${i})">
        <span>${music.title}</span>
        <div class="icon">
            <div class="fa fa-heart-o" 
            style="color:${musics[i].lovethis?'#f99':'#aaa'}"></div>
            <div class="fa fa-ellipsis-h"></div>
        </div>
    </li>
    `
    $('ul#musicList').append(a);
    var b = `
    <div class="swiper-slide" onclick="MusicPlay(${i})">
        <img src="./img/${music.imh}">
        <h3 class="content">
            ${music.title}
            <br><span>${music.year}</span>
        </h3>
    </div>
    `
    $('.swiper-wrapper').append(b);
})
let isplaying = false;
let index = 0;
$('#imgMusic').click(()=>{
    $('.phone').toggleClass('on');
});
$('#play').click(() => {playpause()});
function playpause(){
    if(isplaying){
        $('#play').removeClass('playing');
        audios.pause();
        isplaying = false;
    }else{
        $('#play').addClass('playing');
        audios.play();
        isplaying = true;
    }
}
var randomSong = false;
var replay = false;
$('#repl').click(()=>{
    replay=!replay;
    $('#repl').css('color',(replay?'#f44':'#aaa'));
});
$('#rand').click(()=>{
    randomSong=!randomSong;
    $('#rand').css('color',(randomSong?'#f44':'#aaa'));
});
$('#back').click(()=>{
    if(randomSong){
        var randInd = Math.floor(Math.random()*musics.length);
        index = randInd;
    }else{
        index--;
        if(index<0){
            index = musics.length-1;
        }
    }
    MusicPlay(index);
});
function next(){
    if(randomSong){
        var randInd = Math.floor(Math.random()*musics.length);
        index = randInd;
    }else{
        index++;
        if(index>musics.length-1){
            index = 0;
        }
    }
    MusicPlay(index);
}
function MusicPlay(ind){
    audios.src = musics[ind].srcm
    $('#musicTitle').html(musics[ind].title);
    $('#artistImg').css({
        'background':`url(./img/${musics[ind].img})`,
        'backgroundPosition':'center',
        'backgroundSize':'cover',
    });
    $('#imgMusic').css({
        'background':`url(./img/${musics[ind].imh})`,
        'backgroundPosition':'center',
        'backgroundSize':'cover',
    });
    $('#Artist').html(musics[ind].artist);
    $('#Title').html(musics[ind].title);
    $('#hrt').css('color',(musics[ind].lovethis?'#f33':'#aaa'))
    // console.log(ind);
    audios.play();    
}
$('#hrt').click(()=>{
    loveT(index);
})
function loveT(ind){
    musics[ind].lovethis=!musics[ind].lovethis;
    $('#hrt').css('color',(musics[ind].lovethis?'#f33':'#aaa'));
}
MusicPlay(index);
function updateProgress(e){
    let m,a = 0;
    const {duration ,currentTime} = e.srcElement;
    const progPer = (currentTime / duration) * 100;
    $('#circ').css('width',`${progPer}%`);
    $('#dur').html(`${Math.floor(duration/60)}:${Math.floor(duration%60)>10?Math.floor(duration%60):'0'+Math.floor(duration%60)}`)
    if(progPer === 100){
        if(replay){
            index = index;
            MusicPlay(index);
        }else{
            next();
        }
    }
    a = parseInt(currentTime);
    m = Math.floor(a/60);
    if(m != 0 && a> 60*m - 1){
      a = a % (m * 60);
    }
    $('#time').html(`${m}:${a<10?'0'+a:a}`);
}
function setProg(e){
    const w = this.clientWidth;
    const c = e.offsetX;
    const d = audios.duration;

    audios.currentTime = (c / w )*d;
}
audios.addEventListener('timeupdate',updateProgress);
$('#runner').on('click',setProg);
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    loop:false,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // },
});