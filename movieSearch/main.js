const search = document.getElementById('input');
const machtList = document.getElementById('results');
var icon = document.querySelector('.gg .fa');
const searchStates = async searchText =>{
    const res = await fetch('./database.json');
    const films = await res.json();

    // console.log(states);

    let matches = films.filter(film=>{
        const regex = new RegExp(`^${searchText}`,'gi');

        return film.name.match(regex) || film.format.match(regex);
    })
    if(searchText.length === 0){
        matches = [];
        machtList.innerHTML = '';
    }
    outputHtml(matches)
}
const outputHtml = matches =>{
    if(matches.length > 0){
        setTimeout(()=>{
            const html = matches.map(match=>
                `
                <li>
                    <img src="./img/${match.img}">
                    <h3>Series:${match.series}</h3>
                    <b>${match.format}</b>
                    <span>${match.age}</span>
                    <button>Dowload <i class="fa fa-download"></i></button>
                    <h2>${match.name}</h2>
                </li>
                `).join('');
        
                machtList.innerHTML = html;
        },100)
        
        // console.log(html);
    }
}
search.addEventListener('input',()=>searchStates(search.value))
// {
//     "name":"Bugz Bunny season 1",
//     "series":14,
//     "format":"Cartoon",
//     "img":"bugz bunny 1.jpg",
//     "age":"6+"
// },
// {
//     "name":"Bugz Bunny season 4",
//     "series":16,
//     "format":"Cartoon",
//     "img":"bugz bunny 4.jpg",
//     "age":"6+"
// },