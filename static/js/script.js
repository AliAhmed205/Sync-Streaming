if (window.Plyr) {
    const player = new Plyr('#player');

    player.on('ready', () => {
        console.log('Ali is gek')
        player.muted = true
        console.log();
        player.play()
        player.loop = true; 
    })
}


const navBar = document.querySelector(".searchNav")
const searchIcon = document.getElementById("searchIcon")
const cancelButton = document.getElementById("cancelButton")

if (navBar && searchIcon && cancelButton) {
    function navSearchBar(){
        navBar.classList.add("active")
    }

    function cancelSearch(){
        navBar.classList.remove("active")
    }

    console.log(searchIcon)

    searchIcon.addEventListener("click", navSearchBar)
    cancelButton.addEventListener("click", cancelSearch)
}