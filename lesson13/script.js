
function* createIdGenerator(){
    let result = 0;
    for (let i = 0; i < 10; i++){
        result+=1;
        yield result;
    }
}
const idGenerator = createIdGenerator()
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const down = document.querySelector('.down');
const up = document.querySelector('.up');
const text = document.querySelector('.text')

export function* newFontGenerator(size){
    basicFontSize = size;
    for (let i = 0; i < Infinity; i++){
        let fontSizeBtn = yield basicFontSize;
        if(fontSizeBtn === 'down') basicFontSize -= 2;
        if(fontSizeBtn === 'up')  basicFontSize += 2;
    }
    }
const fontGenerator = newFontGenerator(14);
const downBtn = down.addEventListener('click', ()=>{
    text.style.fontSize = `${fontGenerator.next('down').value}px`
    
})
const upBtn = up.addEventListener('click', ()=>{
    text.style.fontSize = `${fontGenerator.next('up').value}px`
})






// import {lesson1} from '../../lesson1/js.js'
// import {lesson2} from '../../lesson2/script.js'
// import {getRandomPassword} from '../../lesson3/script.js'
// import {getPairs} from '../../lesson4/script.js'
// import {replaceBadWords} from '../../lesson5/script.js'
// import {getBestStudent} from '../../lesson6/script.js'
// import {getMySalary} from '../../lesson7/script.js'
// import Student from '../../lesson8/script.js'
// import {generateBlocksInterval} from '../../lesson9/script.js'
// import {listen, play, removeActiveClass} from '../../lesson10/script.js'
// import {getRandomChinese} from '../../lesson11/script.js'

// import {films, planetsFunction, charactFunction} from '../../lesson12/script.js'
// import {newFontGenerator} from '../../lesson13/script.js'

// @import url(../lesson9/style.css);
// @import url(../lesson10/style.css);
// @import url(../lesson12/style.css);
// @import url(../lesson13/style.css);