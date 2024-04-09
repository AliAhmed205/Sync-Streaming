const player = new Plyr('#player');
const navBar = document.getElementById("searchNav")
const searchIcon = document.getElementById("searchIcon")


player.on('ready', () => {
    console.log('Ali is gek')
    player.muted = true
    console.log();
    player.play()
    player.loop = true; 
})

console.log(searchIcon)

function navSearchBar(){
    navBar.classList.add("active")
}

searchIcon.addEventListener("click", navSearchBar())