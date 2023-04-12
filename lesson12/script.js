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
    getPeopleOfFilms()
    let block = document.createElement('div');
            block.classList.add('people1');
            btn1.append(block);
            
})
let people = [];
 async function getPeopleOfFilms(){
    let film = 1;
    const request =  await fetch(`https://swapi.dev/api/films/${film}/`)
    const response = await request.json();
    let json = JSON.stringify(response);   
    let meetup = JSON.parse(json, function(key, value) {
        if (key == 'characters') return (value);
        return value});
      return  people.push(meetup.characters);
    
    }
    function getCharacters(people){
        people.forEach((element) => {
            console.log(element);
            fetch(`${element}`)
            .then((res) => res.json())
            .then((res)=> {
             console.log(( res))}
             
             )
            })
            // arrOfPeople.forEach((el)=>{
            //  console.log(el)
            // }
            // )
     }
     
    //  getCharacters(getPeopleOfFilms)
    

    console.log(getCharacters());
        
//         let obj = {}
// for (let item of arrOfPeople){
//     if(!obj[item]){
//         obj[item] = 0;
//       }
//       obj[item]++;
//     }

// console.log(obj);
    // }
    // );

        // let peopleName = JSON.parse(json, function(key, value) {
        //     if (key == "name") return (value);
        //     console.log(value);
        //     return value;
        //   }); 
        // .then((res)=> json())
        //     .then((res)=> {
        //        console.log((res));
        //         })
     
      
