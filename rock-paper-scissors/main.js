let userW = 0;
let compW = 0;
function game(e){
    const comph = randomHand();
    let result = '';
    let user = e.className.split(' ')[0];
    if(comph == user){
        result = 'Drow'
    }else if(comph == 'paper' && user == 'rock'){
        result = 'You win';
        userW++;
    }else if(comph == 'paper' && user == 'scissor'){
        result = 'You lose';
        compW++;
    }else if(comph == 'rock' && user == 'paper'){
        result = 'You lose';
        compW++;
    }else if(comph == 'rock' && user == 'scissor'){
        result = 'You win';
        userW++;
    }else if(comph == 'scissor' && user == 'rock'){
        result = 'You lose';
        compW++;
    }else if(comph == 'scissor' && user == 'paper'){
        result = 'You win';
        userW++;
    }
    document.getElementById('text').innerHTML = result;
    document.getElementById('user').innerHTML = userW;
    document.getElementById('comp').innerHTML = compW;
    document.querySelector('.comp .hand').className = `hand ${comph}`
}

function randomHand(){
    let a = Math.floor(Math.random() * 3);
    switch(a){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
    }
}