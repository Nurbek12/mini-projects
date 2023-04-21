const value = document.getElementById('val')
let b = false

function addSym(x){
    value.value += x
    sc()
}

function ev(){
    value.value = eval(value.value)
    sc()
}

function clr(){
    value.value = ''
    sc()
}

function dec(){
    value.value = eval(value.value)
    value.value = -1*(value.value)
    sc()
}

function dot(){
    value.value = eval(value.value)
    value.value = (value.value)/10
    sc()
}

function theme(){
    document.querySelector('.card').classList.toggle('on')
}

function sc(){
    setTimeout(()=>{
        value.scrollLeft = value.scrollWidth;
    },1)
}