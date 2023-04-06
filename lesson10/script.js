
   window.addEventListener('keydown', listen) 

   function listen(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.play[data-key="${event.code}"]`);
    removeActiveClass() 
    if(!audio) return;
        audio.play()
    key.classList.add('active')
   }

   const play = document.querySelectorAll('.play') 
      function removeActiveClass() {
        play.forEach(panel => {
            panel.classList.remove('active')
        })
        }
  
