document.body.onload = generateBlocks();


export  function generateBlocks() {
  const wrapper = document.querySelector('#wrap');
    wrap.style.cssText =`width: 250px;
    height: 250px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;`;
    wrapper.innerHTML = '';
          for (let j = 0; j < 25; j++) {
            let block = document.createElement('div');
            block.classList.add('block');
           wrapper.append(block);
          }
 }
   function generateBlocksInterval(){
              const blocks = document.getElementsByClassName('block');
                  function getRandom(min, max){
                  return Math.ceil(Math.random() * (max - min) + min)
                  }
                 for( let i =0; i < blocks.length; i++){
                  blocks[i].style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
                 }
              }
 setInterval(generateBlocksInterval, 1000);

 
