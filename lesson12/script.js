const info = document.querySelector('.info');
const next = document.querySelector('.next');
const btn = document.querySelectorAll('.btn');

    btn.forEach((bt) => {
      info.addEventListener('click', () => {
        bt.classList.add('active')
        })
    })
//    function removeActiveClass() {
//     if()
//     btns.forEach(btn => {
//         btn.classList.remove('active')
//     })
// }
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');

btn1.addEventListener('click', () =>{
    let block = document.createElement('div');
    block.classList.add('people1');
    btn1.append(block);
    getPeopleOfFilms()
    getCharacters()
})
let peopleOfFilm = []; 

 
 async function getPeopleOfFilms(){
    // debugger
    let film = 1;
    const request =  await fetch(`https://swapi.dev/api/films/${film}/`)
    const response = await request.json();
    let json = JSON.stringify(response);   
    let meetup = JSON.parse(json, function(key, value) {
        if (key == 'characters') return (value);
       return  value})
       let people = meetup.characters;
       for (let i = 0; i < people.length; i++){
        peopleOfFilm.push(people[i]);
       }
        }

console.log(peopleOfFilm);
function getCharacters(peopleOfFilm){
    peopleOfFilm.forEach((element) => {
        console.log(element)
      fetch(`${element}`)
         .then((res)=> json())
         .then((res)=> {
            console.log((res))
             })
         })
        
 }


 
        //  let peopleName = JSON.parse(json, function(key, value) {
        //     if (key == "name") return (value);
        //     console.log(value);
        //     return value;
        //   }); 
        // .then((res)=> json())
        //     .then((res)=> {
        //        console.log((res));
        //         })
     