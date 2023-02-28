const officeList = require("./officelocation.json");

var stylesArray = [
  {
    stylers: [
      { saturation: -20 },
      { visibility: "on" },
      // { hue: "#b3e5fc" },
      { lightness: 10 },
    ],
  },
];

const mapLocations = () => {
  const mapDisplay = document.getElementById("map");
  if (mapDisplay) {
    const newMap = officeList;
    let map;
    function initMap() {
      function getNearbyPlaceDetails(position) {
        const currentPoslat = position.coords.latitude;
        const currentPoslong = position.coords.longitude;
        console.log(currentPoslat);
        console.log(currentPoslong);
      }
      function error(e) {
        console.log(e);
      }
      const options = {
        enableHighAccuracy: false,
        maximumAge: 10000,
      };
      navigator.geolocation.getCurrentPosition(
        getNearbyPlaceDetails,
        error,
        options
      );
      map = new google.maps.Map(mapDisplay, {
        center: new google.maps.LatLng(43.845388, -75.802482),
        zoom: 3,
        streetViewControl: false,
        mapTypeControl: false,
        styles: stylesArray,
      });
      let contentInfo;
      for (let country of newMap) {
        let {
          latitude,
          longitude,
          officeName,
          addressLine1,
          postalZipCode,
          cityName,
          stateProvinceCode,
        } = country;
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          icon: "../../images/map-marker.svg",
        });
        let address = ` ${addressLine1} ${cityName} ${postalZipCode} ${stateProvinceCode}`;
        let mapAddress = address.replace(" ", "%20");
        const contentTiitle = `<div class="google-map__location_map-location">
      <h1 class="google-map__location_map-location-names">${officeName}</h1>
      <a class="google-map__location_map-location-links" href="http://maps.google.com/maps?q=${mapAddress}" target="_blank">${addressLine1} ${cityName} ${stateProvinceCode} ${postalZipCode}</a>
      </div>
      `;
        const infowindow = new google.maps.InfoWindow({
          content: contentTiitle,
        });
        marker.addListener("click", () => {
          if (contentInfo) {
            contentInfo.close(map, marker);
          }
          infowindow.open(map, marker);
          contentInfo = infowindow;
        });
      }
    }

    initMap();

    let zipTarget = document.querySelector(
      ".zip-locations__find_city-triggers"
    );
    zipTarget.addEventListener("click", () => {
      let hide = document.querySelector(".zip-locations__form-search");
      hide.classList.toggle("search-show");
    });
  }
};

export default mapLocations;
