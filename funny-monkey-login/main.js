document.getElementById('email').addEventListener('focus', () => {
    document.querySelector('.face-det').classList.add('foc')
})
document.getElementById('email').addEventListener('input', (e) => {
    document.querySelector('.face-det').classList.add('open')
    if(e.target.value == ''){
        document.querySelector('.face-det').classList.remove('open')
    }
})
document.getElementById('pass').addEventListener('focus', (e) => {
    document.getElementById('monkey').classList.add('passw')
    document.querySelector('.face-det').classList.remove('foc')
})
document.getElementById('show').addEventListener('click', (e) => {
    if(e.target.checked){
        document.querySelector('.monkey_body').classList.add('showing')
        document.getElementById('pass').setAttribute('type', 'text')
    }else{
        document.querySelector('.monkey_body').classList.remove('showing')
        document.getElementById('pass').setAttribute('type', 'password')
    }
})
document.querySelector('input[type="button"]').addEventListener('click', () => {
    document.querySelector('.monkey_body').classList.remove('showing');
    document.querySelector('.face-det').classList.remove('open')
    document.querySelector('.face-det').classList.remove('foc')
    document.getElementById('monkey').classList.remove('passw')
}); 