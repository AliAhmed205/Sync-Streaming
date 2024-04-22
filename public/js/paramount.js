document.addEventListener("DOMContentLoaded", function() {

  document.title = "Sync with Paramount";

  const audio = new Audio('audio/paramount-intro.mp3');
  audio.loop = false;
  audio.play();
  audio.volume = 0.4;

  const magicSound = document.getElementById('mountainBtn');

  magicSound.addEventListener('click', ()=> {
    magicSound.classList.add('paramountStyle')
    audio.loop = false;
    audio.play();
    audio.volume = 0.4;

    setTimeout(() => {
      magicSound.classList.remove('paramountStyle');
  }, 8000); 
 
  })


});


