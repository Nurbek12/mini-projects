const postsimag = document.querySelectorAll('.post_big_img');
const smiles = ['😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😃','😍','🥰','🥰','😘','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😮','😵','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🤲','👐','🙌','👏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤟','🤘','👌','🤏','👈','👉','👆','👇','☝️','✋','🤚','🖐','🖖','👋','🤙','💪','🖕','✍️','🙏','💋','👀','👱‍♀️','👨‍🦱','👩‍🦰','👩‍🦳','👮‍♀️','🙅‍♀️','🙅‍♂️','💁‍♂️','💁‍♀️','🙋‍♀️','🙋‍♂️','🧏‍♀️','🧏‍♂️','🤦‍♀️','🤦‍♂️','🤷‍♀️','🤷‍♂️','🚶‍♀️'];
const showSmile = document.querySelectorAll('form .fa');
smiles.forEach(s => {
    document.querySelector('.smiles').innerHTML += '<span>'+s+'</span>';
});
postsimag.forEach(c => {
    c.addEventListener('dblclick', ()=>{
        var like = document.createElement('div');
        like.classList.add('likeHeart');
        like.innerHTML = '<i class="fa fa-heart"></i>'
        c.parentElement.append(like);
        setTimeout(() => {
            like.remove();
        },600);
    });
});

showSmile.forEach(s => {
    s.addEventListener('click', ()=>{
        document.querySelector('.smiles').classList.toggle('show');
    });
});
