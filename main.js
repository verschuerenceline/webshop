import './reset.css'
import './style.css'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const access_token = 'pk.eyJ1IjoidmVyc2NodWVyZW5jZWxpbmU5OCIsImEiOiJjbGVtazk3cDIxNmRhM3hucHNnOGFqNzk4In0.XaAR5Z0cLgW4pohuA2xjyA';

/// Coördinaten van de locatie die je wilt omzetten in een adres
let lngLat = [4.4506507, 51.1701403];

async function reverseGeocode() {
  try {
    // Loader element toevoegen
    document.querySelector('#loader').style.display = 'block';
    // Omgekeerde geocodeerfunctie aanroepen
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat[0]},${lngLat[1]}.json?access_token=${access_token}`);
    const data = await response.json();

    // Adresgegevens ophalen uit de respons
    let feature = data.features[0];
    let address = feature.place_name;

    // Het adres vervangen
    document.getElementById('address').innerHTML = address;
    // Loader element verbergen
    document.querySelector('#loader').style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

reverseGeocode();

