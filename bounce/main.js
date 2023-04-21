var a = document.getElementById('bounce');
for (var i=0;i<50;i++){
    a.innerHTML +=
    `
    <span class="ss" style="--i:${i+1}"></span>
    `
} 