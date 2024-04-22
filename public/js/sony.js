document.addEventListener("DOMContentLoaded", function() {
  const audio = new Audio('audio/sony.mp3');
  audio.loop = false;
  audio.play();
  audio.volume = 0.4;

  const magicSound = document.getElementById('sonyBtn');

  magicSound.addEventListener('click', ()=> {
    magicSound.classList.add('sonyStyle')
    audio.loop = false;
    audio.play();
    audio.volume = 0.4;

    setTimeout(() => {
      magicSound.classList.remove('sonyStyle');
  }, 3000); 
 
  })


});


