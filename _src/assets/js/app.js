var map = function() {
  var self = this;

  function dispMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      center: {
        lat: 41.176,
        lng: -73.1615,
      },
      disableDefaultUI: true
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
      placeId: 'ChIJz88P1scN6IkRW_KuFCMb-uY'
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  }

  // Fires Up the Map.
  self.map = dispMap();
};

var loadError = function() {
  Materialize.toast('Trouble Getting Directions.', 5000, 'rounded');
};

$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();

  /* Face Book JS */
  window.fbAsyncInit = function() {
    FB.init({
      appId: '1078294885527262',
      xfbml: true,
      version: 'v2.5'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

/* TODO: Create get directions function using geo location*/
/* Start with this html --> */
/* use a swal modal to launch directions in another tab. */

//   <form action="http://maps.google.com/maps" method="get" target="_blank">
//    <label for="saddr">Enter your location</label>
//    <input type="text" name="saddr" />
//    <input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
//    <input type="submit" value="Get directions" />
// </form>
