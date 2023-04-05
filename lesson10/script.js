
   window.addEventListener('keydown', function(event) { 
    
      document.getElementById(`${event.code}`).play();

  })
  const panels = document.querySelectorAll('.play');
const array = Array.from(panels);
array.forEach((panel) => {
      panel.addEventListener('keydown', () => {
        removeActiveClass()
            panel.classList.add('active')
      })
      function removeActiveClass() {
        array.forEach(panel => {
              panel.classList.remove('active')
          })
      }
  })
  