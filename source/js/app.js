(function() {
  'use strict';

  var menuOpen = (function () {
    $('.header__share-point').on('click', function(){
      if ($('.header__share-point').hasClass('header__share-point--transform')) {
        $('.header__share-point').removeClass('header__share-point--transform');
        return
      } else {
        $('.header__share-point').addClass('header__share-point--transform');
      }
    });
  })();
})();


/*map*/

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    // center: new google.maps.LatLng(0,0),
    scrollwheel: false,
    zoom: 2,
    mapTypeControl: false,
    draggable: false,
    disableDoubleClickZoom: true,
    center: {lat: 43, lng: 11},
    styles: [
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#cfcfcf"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ],
    zoomControl: false,
    streetViewControl: false
  });
  setMarkers(map);
};




function setMarkers(map) {
  var beaches = [
    ['Global Headquarters', 40.222847, -74.905714, 1],
    ['CIS Headquarters', 55.611676, 37.665751, 1],
    ['Saint-Petersburg', 59.888678, 30.327815, 1],
    ['Minsk', 53.927162, 27.681375, 1],
    ['Toronto', 43.768610, -79.414796, 1],
    ['Shanghai', 31.068963, 121.441550, 1],
    ['Prague', 50.050276, 14.436188, 1],
    ['Krakow', 50.087132, 19.976867, 1],
    ['Stockholm', 59.332898, 18.054773, 1],
    ['Kyiv: Registered office', 50.432160, 30.507821, 1],
    ['Dubai', 25.103069, 55.170422, 1],
    ['London', 51.518091, -0.078560, 1],
    ['Philadelphia, PA', 39.953717, -75.152572, 1],
    ['Washington D.C.', 38.926198, -77.218908, 1],
    ['San Francisco, CA', 37.790213, -122.403432, 1]
  ];
  var markers = [];
  var largeInfowindow = new google.maps.InfoWindow();
  var image = {
    url: '/assets/img/pic/marker.png',
  };
  var infowindow = new google.maps.InfoWindow({
    content: "hi"
  });

  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      title: beach[0],
      zIndex: i
    });
    markers.push(marker);
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });
  }

  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function () {
        infowindow.setMarker = null;
      });
    }
  }
};


