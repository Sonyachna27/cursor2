const characters = document.querySelector('.characters');
const film = document.querySelector('.film');
const planets = document.querySelector('.planets');
const charactersBlock = document.querySelector('.characters_block');
const filmBlock = document.querySelector('.film_block');
const planetsBlock = document.querySelector('.planets_block');
const input = document.querySelector('input');

export const films = film.addEventListener('click', () => {
    planetsBlock.innerHTML = '';
    charactersBlock.innerHTML = '';  
    getFilms()
       if(planetsFunction || charactFunction) return (removeGetPlanets() || removeGetCharacters())
    //  if(charactFunction)  removeGetCharacters()
    
       })
export const planetsFunction = planets.addEventListener('click', () => {
        getPlanets()
        filmBlock.innerHTML = ''
        charactersBlock.innerHTML = '';        
            })
export  const charactFunction = characters.addEventListener('click', () => {
        getCharacters()
        filmBlock.innerHTML = '';
        planetsBlock.innerHTML = '';
        if(planetsFunction || films) removeGetPlanets() || removeGetFilms()
         })
let result = {};
let resultOfPlanets = {};
let resultOfCharacters = {};
let resultOfFilm = {};
let peopleOfFilm = [];
let objOfFilmsCharact = [];
let resOfCharact ={};
let titleInput = '';
// input.addEventListener("input", (e) =>{
//     titleInput = e.target.value;
//     getChooseFilms()
// })
// async function getChooseFilms(){
    
//         let film = titleInput;
//         if(!film) return
//         const request =  await fetch(`https://swapi.dev/api/films/${film}/`)
//         const response = await request.json();
//         let json = JSON.stringify(response);   
//         let meetup = JSON.parse(json, function(key, value) {
//             if (key == 'characters') return (value);
//            return  value})
//            let people = meetup.characters;
//            for (let i = 0; i < people.length; i++){
//             peopleOfFilm.push(people[i]);
//            }
//             peopleOfFilm.forEach((element) => {
//               fetch(`${element}`)
//                  .then((res)=> res.json())
//                  .then((res)=> {
//                  objOfFilmsCharact.push(JSON.stringify(res, ['name', 'gender', 'birth_year']))
//                      })
//                  })
                  
//       for(let key of peopleOfFilm){
//         let img = document.createElement('img');
//         let figcaption = document.createElement('figcaption');
//         img.src = peopleOfFilm[key]
//         // figcaption.innerHTML = `${key}`
//         charactersBlock.append(img)
//         // charactersBlock.append(figcaption)
        
//          }
//             return 
//     }
async function getFilms(){
    
    const request =  await fetch(`https://swapi.dev/api/films/`)
    const response = await request.json();
    let json = JSON.stringify(response);   
    let meetup = JSON.parse(json, function(key, value) {
        if (key == 'results') return (value);
       return  value})
        let infoAboutFilms = meetup.results;
        let objectFilms = [];  
          for (let i of infoAboutFilms){
            for (let key in i){
                if (key == 'title') {
                    objectFilms.push(i[key])
                }
            }
        }   
    const objOfFilms = {...objectFilms.map((m)=> m.replace(/ /g,''))};
       const res =  Object.entries(objOfFilms).forEach(([key, value]) => {
        result[value] = key
      })
    result.ANewHope = `./img/star-wars-a-new-hope-one-sheet-i28733.jpg`;
    result.AttackoftheClones = `./img/AttackoftheClones.jpg`;
    result.ReturnoftheJedi = `./img/ReturnoftheJedi.jpg`;
    result.RevengeoftheSith = `./img/RevengeoftheSith.jpg`;
    result.TheEmpireStrikesBack = `./img/TheEmpireStrikesBack.jpg`;
    result.ThePhantomMenace = `./img/The_phantom_menace.jpg`;
      for(let key in result){
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        let figure = document.createElement('figure');
        img.src = result[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        filmBlock.append(figure)
        figure.append(img)
        figure.append(figcaption)
         }
            return 
    }

  async function getPlanets(){
    const request =  await fetch(`https://swapi.dev/api/planets/`)
    const response = await request.json();
    let json = JSON.stringify(response);   
    let meetup = JSON.parse(json, function(key, value) {
        if (key == 'results') return (value);
       return  value})
        let infoPlanets = meetup.results;
        let objectPlanets = [];  
          for (let i of infoPlanets){
            for (let key in i){
                if (key == 'name') {
                    objectPlanets.push(i[key])
                }
            }
        }   
    const objOfPlanets = {...objectPlanets.map((m)=> m.replace(/ /g,''))};
       const res =  Object.entries(objOfPlanets).forEach(([key, value]) => {
        resultOfPlanets[value] = key
      })
      resultOfPlanets.Tatooine = `./img/Planets/Tatooine.jpg`;
      resultOfPlanets.Alderaan = `./img/Planets/Alderaan.jpg`;
      resultOfPlanets.YavinIV = `./img/Planets/Yavin IV.jpg`;
      resultOfPlanets.Hoth = `./img/Planets/Hoth.jpg`;
      resultOfPlanets.Dagobah = `./img/Planets/Dagobah.jpg`;
      resultOfPlanets.Bespin = `./img/Planets/Bespin.jpg`;
      resultOfPlanets.Endor = `./img/Planets/Endor.jpg`;
      resultOfPlanets.Naboo = `./img/Planets/Naboo.jpg`;
      resultOfPlanets.Coruscant = `./img/Planets/Coruscant.jpg`;
      resultOfPlanets.Kamino = `./img/Planets/Kamino.jpg`;
      for(let key in resultOfPlanets){
        let img = document.createElement('img');
        let figure = document.createElement('figure');
        let figcaption = document.createElement('figcaption');
        img.src = resultOfPlanets[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        planetsBlock.append(figure)
        figure.append(img)
        figure.append(figcaption)
         }
            return 
    }
  async function getCharacters(){
    const request =  await fetch(`https://swapi.dev/api/people/`)
    const response = await request.json();
    let json = JSON.stringify(response);   
    let meetup = JSON.parse(json, function(key, value) {
        if (key == 'results') return (value);
       return  value})
        let infoCharacters = meetup.results;
        let objectCharacters = [];  
          for (let i of infoCharacters){
            for (let key in i){
                if (key == 'name') {
                    objectCharacters.push(i[key])
                }
            }
        }   
    const objOfCharacters = {...objectCharacters.map((m)=> m.replace(/\W/g, ''))};
       const res =  Object.entries(objOfCharacters).forEach(([key, value]) => {
        resultOfCharacters[value] = key
      })
      resultOfCharacters.LukeSkywalker = `./img/characters/LukeSkywalker.jpg`;
      resultOfCharacters.C3PO = `./img/characters/C-3PO.jpg`;
      resultOfCharacters.BeruWhitesunlars = `./img/characters/BeruWhitesunlars.jpg`;
      resultOfCharacters.DarthVader = `./img/characters/DarthVader.jpg`;
      resultOfCharacters.BiggsDarklighter = `./img/characters/BiggsDarklighter.jpg`;
      resultOfCharacters.LeiaOrgana = `./img/characters/LeiaOrgana.jpg`;
      resultOfCharacters.ObiWanKenobi = `./img/characters/Obi-WanKenobi.jpg`;
      resultOfCharacters.OwenLars = `./img/characters/OwenLars.jpg`;
      resultOfCharacters.R2D2 = `./img/characters/R2-D2.jpg`;
      resultOfCharacters.R5D4 = `./img/characters/R5-D4.jpg`;
      for(let key in resultOfCharacters){
        let img = document.createElement('img');
        let figure = document.createElement('figure');
        let figcaption = document.createElement('figcaption');
        img.src = resultOfCharacters[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        figure.append(img)
        charactersBlock.append(figure)
        figure.append(figcaption)
         }
            return 
    }