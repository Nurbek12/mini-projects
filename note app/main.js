const box = document.getElementById('box');
const text = document.getElementById('text');
const search = document.getElementById('search');
let allnotes = [
    {id: 1, text: 'Learn vue.js/ vue-router/ vuex/ vuetify'},
]
let isEditid = 0;

function dispNotes(notes){
    box.innerHTML = `${
        notes.map((note, i) => {
            return `
            <div class="note">
                <span>${i + 1}. ${note.text}</span>
                <div class="icons">
                    <div class="edit" onclick="editNotes(${note.id})">
                        <img src="./img/pencil-outline.svg" width="20">
                    </div>
                    <div class="delete" onclick="deleteNotes(${note.id})">
                        <img src="./img/close-outline.svg" width="30">
                    </div>
                </div>
            </div>`
        }).join('')
    }`;
    box.scrollTop = box.scrollHeight;
}
function addNotes(){
    if(text.velue !== ''){
        if(isEditid !== 0){
            allnotes.forEach(c => {
                if(c.id === isEditid){
                    c.text = text.value;
                }
            });
            isEditid = 0;
        }else{
            allnotes.push({
                id: Date.now(),
                text: text.value
            });
        }
        dispNotes(allnotes);
        text.value = '';
    }
}

function deleteNotes(id){
    allnotes = allnotes.filter(n => n.id !== id);
    dispNotes(allnotes);
}

function editNotes(id){
    let curEe = allnotes.filter(n => n.id === id)[0];
    isEditid = curEe.id;
    text.value = curEe.text;
}

function searchNotes(text){
    let matches = allnotes.filter(nt => {
        const regex = new RegExp(`^${text}`, 'gi');

        return nt.text.match(regex);
    });
    if(text == ''){
        matches = [];
        dispNotes(allnotes);
        return;
    }
    dispNotes(matches);
}

search.addEventListener('input', e => {
    searchNotes(e.target.value)
});
dispNotes(allnotes);