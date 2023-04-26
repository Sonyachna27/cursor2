
   window.addEventListener('keydown', listen) 

 export  function listen(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.play[data-key="${event.code}"]`);
    removeActiveClass() 
    if(!audio) return;
        audio.play()
    key.classList.add('active')
   }

export const play = document.querySelectorAll('.play') 
 export    function removeActiveClass() {
        play.forEach(panel => {
            panel.classList.remove('active')
        })
        }
  
