const sliderCards = document.querySelectorAll('.slider-card');
let ind = 0;
function addClassbyid(i){
    let j = (i) % (sliderCards.length);
    if(sliderCards.length == 3){
        switch(j){
            case 0: return 'left1';
            case 1: return 'center';
            case 2: return 'right1';
            default: return 'none';
        }
    }
    if(sliderCards.length > 5){
        switch(j){
            case 0: return 'left2';
            case 1: return 'left1';
            case 2: return 'center';
            case 3: return 'right1';
            case 4: return 'right2';
            default: return 'none';
        }
    }
}

function sliderMove(n){
    sliderCards.forEach((s) => {
        s.className = 'slider-card';
    });
    for(let i = 0; i < sliderCards.length; i++){
        sliderCards[i].classList.add(addClassbyid(i + n))
    }
    bodyBgImage();
}

function bodyBgImage(){
    document.body.style.background = `url('${document.querySelector('.center img').src}')`;
}

function sliderBack(){
    ind--;
    if(ind < 0){
        ind = sliderCards.length - 1;
    }
    sliderMove(ind);
}

function sliderForv(){
    ind++;
    sliderMove(ind);
}

sliderMove(ind);