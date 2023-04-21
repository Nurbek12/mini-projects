const text = document.getElementById('text')
var txt = 'JavaScript'
for(var i=0;i<txt.length;i++){
    text.innerHTML += 
    `<span class="blur" style="--i:${i};" onclick="a(${i})">${txt[i]}</span>`;
     
}

// for(var i=0;i<s.length;i++){
//     s[i].addEventListener('click',e=>{
//         console.log(this.textContent)
//     });
// }
function a(j){
    var s = document.querySelectorAll('.blur');
    // setTimeout(() => {
        s[j].classList.add('e')
    // }, 0);
}