document.addEventListener("DOMContentLoaded", function() {

    document.title = "Sync with Disney"

    const audio = new Audio('audio/disney-intro.mp3')
    audio.loop = false
    audio.play()
    audio.volume = 0.4

    const magicSound = document.getElementById('magicBtn')
    const magicBackground = document.getElementById('glitterBackground')
    const mainElement = document.querySelector('main')

    magicSound.addEventListener('click', ()=> {
      magicSound.classList.add('magicStyle')
      audio.loop = false
      audio.play()
      audio.volume = 0.4
      magicBackground.style.opacity = 1
      mainElement.style.opacity = .1 
      mainElement.style.transition = "all .5s"

      setTimeout(() => {
        magicSound.classList.remove('magicStyle')
        magicBackground.style.opacity = .2
        mainElement.style.opacity = 1
        // mainElement.style.transition = "all .5s"
    }, 8000) 
   
    })


  })


  