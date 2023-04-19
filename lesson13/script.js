
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
const interval = setInterval( ()=>{(console.log(idGenerator.next().value))}, 100)
idGenerator.return(10)
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const text = document.querySelector('.text')

function* newFontGenerator(size){
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






