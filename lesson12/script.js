const characters = document.querySelector('.characters');
const film = document.querySelector('.film');
const planets = document.querySelector('.planets');
const charactersBlock = document.querySelector('.characters_block');
const filmBlock = document.querySelector('.film_block');
const planetsBlock = document.querySelector('.planets_block');
const input = document.querySelector('input');

    film.addEventListener('click', () => {
        getFilms()
        removeGetPlanets()
        removeGetCharacters()
        
            })
    planets.addEventListener('click', () => {
        getPlanets()
        removeGetFilms()
        removeGetCharacters()
        
            })
    characters.addEventListener('click', () => {
        getCharacters()
        removeGetFilms()
        removeGetPlanets()
            })
let result = {};
let resultOfPlanets = {};
let resultOfCharacters = {};
let peopleOfFilm = [];
let objOfFilmsCharact = [];
let resOfCharact ={};
let titleInput = '';
// input.addEventListener("input", (e) =>{
//     titleInput = e.target.value;
//     getChooseFilms()
// })
// async function getChooseFilms(){
//     // debugger
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
//                     objOfFilmsCharact.push( JSON.parse(JSON.stringify(res, ['name', 'gender', 'birth_year'])))
//                      })
//                  })
                
    
//       for(let key in objOfFilmsCharact){
//         let img = document.createElement('img');
//         let figcaption = document.createElement('figcaption');
//         img.src = result[key]
//         figcaption.innerHTML = `${key}`
//         charactersBlock.append(img)
//         charactersBlock.append(figcaption)
//          }
//     // console.log(res);
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
        img.src = result[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        filmBlock.append(img)
        filmBlock.append(figcaption)
         }
            return 
    }
  function removeGetFilms(){
    filmBlock.remove()
  }
  function removeGetPlanets(){
    planetsBlock.remove()
  }
  function removeGetCharacters(){
    charactersBlock.remove()
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
        let figcaption = document.createElement('figcaption');
        img.src = resultOfPlanets[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        planetsBlock.append(img)
        planetsBlock.append(figcaption)
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
        let figcaption = document.createElement('figcaption');
        img.src = resultOfCharacters[key]
        figcaption.innerHTML = `${key.replace(/([A-Z])/g, ' $1')}`
        charactersBlock.append(img)
        charactersBlock.append(figcaption)
         }
         console.log(resultOfCharacters);
            return 
    }

// film1
// {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Owen Lars","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Beru Whitesun lars","gender":"female","birth_year":"47BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"Anakin Skywalker","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Nute Gunray","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Watto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Padmé Amidala","gender":"female","birth_year":"46BBY"}
// script.js:53 {"name":"Jar Jar Binks","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Jek Tono Porkins","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Shmi Skywalker","gender":"female","birth_year":"72BBY"}
// script.js:53 {"name":"Mace Windu","gender":"male","birth_year":"72BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Ayla Secura","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Beru Whitesun lars","gender":"female","birth_year":"47BBY"}
// script.js:53 {"name":"Owen Lars","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Raymus Antilles","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Wedge Antilles","gender":"male","birth_year":"21BBY"}
// script.js:53 {"name":"Han Solo","gender":"male","birth_year":"29BBY"}
// script.js:53 {"name":"Jabba Desilijic Tiure","gender":"hermaphrodite","birth_year":"600BBY"}
// script.js:53 {"name":"Greedo","gender":"male","birth_year":"44BBY"}
// script.js:53 {"name":"Chewbacca","gender":"male","birth_year":"200BBY"}
// script.js:53 {"name":"Leia Organa","gender":"female","birth_year":"19BBY"}
// script.js:53 {"name":"R5-D4","gender":"n/a","birth_year":"unknown"}
// script.js:53 {"name":"Wilhuff Tarkin","gender":"male","birth_year":"64BBY"}
// script.js:53 {"name":"Biggs Darklighter","gender":"male","birth_year":"24BBY"}
// script.js:53 {"name":"Darth Vader","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Luke Skywalker","gender":"male","birth_year":"19BBY"}
// script.js:53 {"name":"Kit Fisto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Mas Amedda","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Cordé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Ki-Adi-Mundi","gender":"male","birth_year":"92BBY"}
// script.js:53 {"name":"Cliegg Lars","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Plo Koon","gender":"male","birth_year":"22BBY"}
// script.js:53 {"name":"Poggle the Lesser","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Gregar Typho","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Dormé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Luminara Unduli","gender":"female","birth_year":"58BBY"}
// script.js:53 {"name":"Sly Moore","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Shaak Ti","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Barriss Offee","gender":"female","birth_year":"40BBY"}
// script.js:53 {"name":"San Hill","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Wat Tambor","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jocasta Nu","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"R4-P17","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Zam Wesell","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Lama Su","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Dexter Jettster","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Taun We","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Jango Fett","gender":"male","birth_year":"66BBY"}
// script.js:53 {"name":"Dooku","gender":"male","birth_year":"102BBY"}
// script.js:53 {"name":"Bail Prestor Organa","gender":"male","birth_year":"67BBY"}

// film2
// {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Beru Whitesun lars","gender":"female","birth_year":"47BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Owen Lars","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Anakin Skywalker","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"Nute Gunray","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Padmé Amidala","gender":"female","birth_year":"46BBY"}
// script.js:53 {"name":"Ayla Secura","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"Shmi Skywalker","gender":"female","birth_year":"72BBY"}
// script.js:53 {"name":"Watto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jar Jar Binks","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Beru Whitesun lars","gender":"female","birth_year":"47BBY"}
// script.js:53 {"name":"Mace Windu","gender":"male","birth_year":"72BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Owen Lars","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Lando Calrissian","gender":"male","birth_year":"31BBY"}
// script.js:53 {"name":"Lobot","gender":"male","birth_year":"37BBY"}
// script.js:53 {"name":"IG-88","gender":"none","birth_year":"15BBY"}
// script.js:53 {"name":"Raymus Antilles","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Bossk","gender":"male","birth_year":"53BBY"}
// script.js:53 {"name":"Jabba Desilijic Tiure","gender":"hermaphrodite","birth_year":"600BBY"}
// script.js:53 {"name":"Han Solo","gender":"male","birth_year":"29BBY"}
// script.js:53 {"name":"Jek Tono Porkins","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Barriss Offee","gender":"female","birth_year":"40BBY"}
// script.js:53 {"name":"Wedge Antilles","gender":"male","birth_year":"21BBY"}
// script.js:53 {"name":"Greedo","gender":"male","birth_year":"44BBY"}
// script.js:53 {"name":"Plo Koon","gender":"male","birth_year":"22BBY"}
// script.js:53 {"name":"Kit Fisto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Mas Amedda","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Gregar Typho","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Ki-Adi-Mundi","gender":"male","birth_year":"92BBY"}
// script.js:53 {"name":"Cliegg Lars","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Cordé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Luminara Unduli","gender":"female","birth_year":"58BBY"}
// script.js:53 {"name":"Poggle the Lesser","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Han Solo","gender":"male","birth_year":"29BBY"}
// script.js:53 {"name":"Wedge Antilles","gender":"male","birth_year":"21BBY"}
// script.js:53 {"name":"Dormé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Dooku","gender":"male","birth_year":"102BBY"}
// script.js:53 {"name":"Wilhuff Tarkin","gender":"male","birth_year":"64BBY"}
// script.js:53 {"name":"R5-D4","gender":"n/a","birth_year":"unknown"}
// script.js:53 {"name":"Biggs Darklighter","gender":"male","birth_year":"24BBY"}
// script.js:53 {"name":"Leia Organa","gender":"female","birth_year":"19BBY"}
// script.js:53 {"name":"Chewbacca","gender":"male","birth_year":"200BBY"}
// script.js:53 {"name":"Darth Vader","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Shaak Ti","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Wat Tambor","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"San Hill","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Luke Skywalker","gender":"male","birth_year":"19BBY"}
// script.js:53 {"name":"Sly Moore","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Luke Skywalker","gender":"male","birth_year":"19BBY"}
// script.js:53 {"name":"Chewbacca","gender":"male","birth_year":"200BBY"}
// script.js:53 {"name":"Darth Vader","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Leia Organa","gender":"female","birth_year":"19BBY"}
// script.js:53 {"name":"Bail Prestor Organa","gender":"male","birth_year":"67BBY"}
// script.js:53 {"name":"Dexter Jettster","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Zam Wesell","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Lama Su","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Taun We","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Jango Fett","gender":"male","birth_year":"66BBY"}
// script.js:53 {"name":"Jocasta Nu","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"R4-P17","gender":"female","birth_year":"unknown"}

// film3
// {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Luke Skywalker","gender":"male","birth_year":"19BBY"}
// script.js:53 {"name":"Darth Vader","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Leia Organa","gender":"female","birth_year":"19BBY"}
// script.js:53 {"name":"Chewbacca","gender":"male","birth_year":"200BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Han Solo","gender":"male","birth_year":"29BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Jabba Desilijic Tiure","gender":"hermaphrodite","birth_year":"600BBY"}
// script.js:53 {"name":"Wedge Antilles","gender":"male","birth_year":"21BBY"}
// script.js:53 {"name":"Bib Fortuna","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Nien Nunb","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Wicket Systri Warrick","gender":"male","birth_year":"8BBY"}
// script.js:53 {"name":"Mon Mothma","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"Arvel Crynyd","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Ackbar","gender":"male","birth_year":"41BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"Lando Calrissian","gender":"male","birth_year":"31BBY"}

// film4
// {"name":"Luke Skywalker","gender":"male","birth_year":"19BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Leia Organa","gender":"female","birth_year":"19BBY"}
// script.js:53 {"name":"Chewbacca","gender":"male","birth_year":"200BBY"}
// script.js:53 {"name":"Darth Vader","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Jabba Desilijic Tiure","gender":"hermaphrodite","birth_year":"600BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Han Solo","gender":"male","birth_year":"29BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Wedge Antilles","gender":"male","birth_year":"21BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"Watto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Nute Gunray","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jabba Desilijic Tiure","gender":"hermaphrodite","birth_year":"600BBY"}
// script.js:53 {"name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Mas Amedda","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Plo Koon","gender":"male","birth_year":"22BBY"}
// script.js:53 {"name":"Yarael Poof","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Adi Gallia","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Saesee Tiin","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Kit Fisto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Ki-Adi-Mundi","gender":"male","birth_year":"92BBY"}
// script.js:53 {"name":"Eeth Koth","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Ben Quadinaros","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Gasgano","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Mace Windu","gender":"male","birth_year":"72BBY"}
// script.js:53 {"name":"Ric Olié","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Rugor Nass","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Lando Calrissian","gender":"male","birth_year":"31BBY"}
// script.js:53 {"name":"Ackbar","gender":"male","birth_year":"41BBY"}
// script.js:53 {"name":"Mon Mothma","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"Arvel Crynyd","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Ratts Tyerel","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Wicket Systri Warrick","gender":"male","birth_year":"8BBY"}
// script.js:53 {"name":"Ayla Secura","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"Dud Bolt","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Shmi Skywalker","gender":"female","birth_year":"72BBY"}
// script.js:53 {"name":"Darth Maul","gender":"male","birth_year":"54BBY"}
// script.js:53 {"name":"Quarsh Panaka","gender":"male","birth_year":"62BBY"}
// script.js:53 {"name":"Roos Tarpals","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jar Jar Binks","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Sebulba","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Padmé Amidala","gender":"female","birth_year":"46BBY"}
// script.js:53 {"name":"Nien Nunb","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Bib Fortuna","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Anakin Skywalker","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Finis Valorum","gender":"male","birth_year":"91BBY"}
// script.js:53 {"name":"Qui-Gon Jinn","gender":"male","birth_year":"92BBY"}

//     film5
//     "name":"C-3PO","gender":"n/a","birth_year":"112BBY"}
// script.js:53 {"name":"Owen Lars","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"R2-D2","gender":"n/a","birth_year":"33BBY"}
// script.js:53 {"name":"Beru Whitesun lars","gender":"female","birth_year":"47BBY"}
// script.js:53 {"name":"Obi-Wan Kenobi","gender":"male","birth_year":"57BBY"}
// script.js:53 {"name":"Palpatine","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Anakin Skywalker","gender":"male","birth_year":"41.9BBY"}
// script.js:53 {"name":"Padmé Amidala","gender":"female","birth_year":"46BBY"}
// script.js:53 {"name":"Boba Fett","gender":"male","birth_year":"31.5BBY"}
// script.js:53 {"name":"Yoda","gender":"male","birth_year":"896BBY"}
// script.js:53 {"name":"Jar Jar Binks","gender":"male","birth_year":"52BBY"}
// script.js:53 {"name":"Ki-Adi-Mundi","gender":"male","birth_year":"92BBY"}
// script.js:53 {"name":"Watto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Mace Windu","gender":"male","birth_year":"72BBY"}
// script.js:53 {"name":"Nute Gunray","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Shmi Skywalker","gender":"female","birth_year":"72BBY"}
// script.js:53 {"name":"Ayla Secura","gender":"female","birth_year":"48BBY"}
// script.js:53 {"name":"Sly Moore","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Wat Tambor","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Shaak Ti","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"R4-P17","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"San Hill","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jocasta Nu","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Taun We","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Dexter Jettster","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Zam Wesell","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Lama Su","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Jango Fett","gender":"male","birth_year":"66BBY"}
// script.js:53 {"name":"Bail Prestor Organa","gender":"male","birth_year":"67BBY"}
// script.js:53 {"name":"Kit Fisto","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Gregar Typho","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Cliegg Lars","gender":"male","birth_year":"82BBY"}
// script.js:53 {"name":"Cordé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Plo Koon","gender":"male","birth_year":"22BBY"}
// script.js:53 {"name":"Mas Amedda","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Luminara Unduli","gender":"female","birth_year":"58BBY"}
// script.js:53 {"name":"Barriss Offee","gender":"female","birth_year":"40BBY"}
// script.js:53 {"name":"Dormé","gender":"female","birth_year":"unknown"}
// script.js:53 {"name":"Poggle the Lesser","gender":"male","birth_year":"unknown"}
// script.js:53 {"name":"Dooku","gender":"male","birth_year":"102BBY"}