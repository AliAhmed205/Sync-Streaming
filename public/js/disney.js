document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio('audio/disney-intro.mp3');
    audio.loop = false;
    audio.play();
    audio.volume = 0.4;

    const magicSound = document.getElementById('magicBtn');
    const magicBackground = document.getElementById('glitterBackground')

    magicSound.addEventListener('click', ()=> {
      magicSound.classList.add('magicStyle')
      audio.loop = false;
      audio.play();
      audio.volume = 0.4;
      magicBackground.style.opacity = 1;

      setTimeout(() => {
        magicSound.classList.remove('magicStyle');
        magicBackground.style.opacity = .2;
    }, 8000); 
   
    })


  });


  