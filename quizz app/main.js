const quizzes = [
    {
        id: 1,
        quizz: 'Какой рецеп у Diffusal Blade:... ?',
        vs: [
            {id: 1,v: 'Robi of Magi + Blade of Agility x 2 + Recipe', b: true},
            {id: 2,v: 'Demon Edge + Glove of haste', b: false},
            {id: 3,v: 'Mekansm + Vanguard', b: false},
            {id: 4,v: 'Ring of Regeneration + Etheral Blade + Recipe', b: false}
        ]
    },
    {
        id: 2,
        quizz: 'Сколько колдовн у ултьу зевсa 25 ур. + аганима ?',
        vs: [
            {id: 1,v: '90 с', b: true},
            {id: 2,v: '120 с', b: false},
            {id: 3,v: '100 с', b: false},
            {id: 4,v: '70 с', b: false}
        ]
    },
    {
        id: 3,
        quizz: 'Какой урон у 5 лвл Дагона ?',
        vs: [
            {id: 1,v: '800', b: true},
            {id: 2,v: '600', b: false},
            {id: 3,v: '400', b: false},
            {id: 4,v: '900', b: false}
        ]
    },
    {
        id: 4,
        quizz: '"Здез будеть жарко...!" чей это слово ?',
        vs: [
            {id: 1,v: 'Инвокер', b: true},
            {id: 2,v: 'Неверморе', b: false},
            {id: 3,v: 'Гондар', b: false},
            {id: 4,v: 'Лина', b: false}
        ]
    },
    {
        id: 5,
        quizz: 'Каторый магия пренадлежит в лиону ?',
        vs: [
            {id: 1,v: 'Емпале', b: true},
            {id: 2,v: 'Вортекс', b: false},
            {id: 3,v: 'Санстрайк', b: false},
            {id: 4,v: 'Блинк', b: false}
        ]
    },
    {
        id: 6,
        quizz: 'Сколько золото стоить Magic Bottle ?',
        vs: [
            {id: 1,v: '700', b: true},
            {id: 2,v: '550', b: false},
            {id: 3,v: '1000', b: false},
            {id: 4,v: '1250', b: false}
        ]
    },
]
const newRandomQuiz = shuffle(quizzes);
const Npage = document.querySelector('.n-page');
const Qpage = document.querySelector('.q-page');
const Fpage = document.querySelector('.f-page');
const time = document.querySelector('.time');
const startBtn = document.getElementById('startBtn');

let username = '';
let currentInd = 0;
let trueanws = 0;

function shuffle(arr){
    let newarr = [];
    for(let i=0;i<30;i++){
        let rand = Math.floor(Math.random() * arr.length);
        if(!newarr.includes(arr[rand])){
            newarr.push(arr[rand])
        }
        if(newarr.length === arr.length){
            break;
        }
    }
    return newarr;
}

function startQuizz(e){
    if(!e.target.parentElement.querySelector('input').value){
        alert('Пишите имя!');
        return;
    }
    username = e.target.parentElement.querySelector('input').value;
    Npage.style.display = 'none';
    Qpage.style.display = 'block';
    time.style.display = 'block';
    QuizzDisp(currentInd);
    timeDisp();
}

function varC(n){
    if(n == 0){
        return 'a'
    }else if(n == 1){
        return 'b'
    }else if(n == 2){
        return 'c'
    }else if(n == 3){
        return 'd'
    }
}

function timeDisp(){
    let i = 0;
    let m = i % 60;
    setInterval(() => {
        time.innerHTML = `${m>=10?m:'0'+m}:${i>=10?i:'0'+i}`;
        i++;
        if(i == 60){
            i = 0;
            m++;
        }
    },1000)
}

function QuizzDisp(n){
    let currentQuiz = newRandomQuiz[n];
    Qpage.innerHTML = `
        <h2>${n+1}. ${currentQuiz.quizz}</h2>
        <div class="form">
            ${
                shuffle(currentQuiz.vs).map((v, i) => {
                    return `
                    <div class="cont">
                        <input type="radio" name="qz" id="q${i}" data-val="${v.b}">
                        <label for="q${i}">${varC(i)}. ${v.v}</label>
                    </div>
                    `
                }).join('')
            }
        </div>
       <button onclick="newQuizz(this)">
       ${(n == newRandomQuiz.length - 1)?'Завершить':'Следущий'}
       </button>`
}

function newQuizz(e){
    e.parentElement.querySelectorAll('input').forEach((c, i) => {
        if(c.checked == true){
            if(c.getAttribute('data-val') === 'true'){
                trueanws++;
            };
        }
    });
    if(!(currentInd == newRandomQuiz.length - 1)){
        currentInd++;
        QuizzDisp(currentInd);
    }else{
        finishQuizz();
    }
    console.log(trueanws);
}

function finishQuizz(){
    Qpage.style.display = 'none'
    Fpage.style.display = 'block'
    Fpage.innerHTML = `
    <h2>Результат: ${trueanws}/${newRandomQuiz.length}</h2>
    <p>Пользователь: ${username}</p>
    <p>Время: ${time.innerHTML}</p>
    <p>Балл: ${(trueanws*100/newRandomQuiz.length).toFixed(1)}%</p>
    <button onclick="window.location.reload()">Повторить</button>`
    time.style.display = 'none'
}

startBtn.addEventListener('click', e => {
    startQuizz(e)
});