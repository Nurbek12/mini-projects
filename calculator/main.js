const inp = document.getElementById('inp');
let b = true;

function addCharInput(c){
    inp.value += c;
    inp.scrollLeft = inp.scrollWidth;
}

function clearInput(){
    inp.value = '';
}

function BN(){
    if(b){
        evalInput();
        inp.value = parseFloat(inp.value / 10);
        b = false;
    }
}

function PM(){
    evalInput();
    inp.value = -1 * parseFloat(inp.value)
}

function PR(){
    evalInput();
    inp.value = parseFloat(inp.value / 100)
}

function evalInput(){
    b = true;
    inp.value = eval(inp.value);
}