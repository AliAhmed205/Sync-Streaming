if (window.Plyr) {
    const player = new Plyr('#player');

    player.on('ready', () => {
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

// function showPosition(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`)
//     .then(response => response.json())
//     .then(data => {
//       const country = data.results[0].address_components.find(component => component.types.includes('country')).long_name;
//       const userLocation = document.getElementById('userLocation');
//       userLocation.textContent = `Syncing in from ${country}`;
//     })
//     .catch(error => {
//       console.error('Error fetching geolocation:', error);
//     });
// }

// getUserLocation();

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {

  const country = getCountryFromCoordinates(position.coords.latitude, position.coords.longitude);
  const userLocation = document.getElementById('userLocation');
  userLocation.innerHTML = `Syncing in from <b>${country}</b>`;
}

function getCountryFromCoordinates(latitude, longitude) {
  return "Netherlands"; 
}

// Call the function to get user's location
getUserLocation();