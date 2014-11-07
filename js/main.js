var allMarkers = [
  ['My Location', 40.1145152, -88.2296416],
  ['Siebel', 40.1140258, -88.2248073],
  ['DCL', 40.113138, -88.226661]
];

function initialize() {
  var myLoc = new google.maps.LatLng(40.1145152,-88.2296416);

  var mapOptions = {
    center: myLoc,
    zoom: 18,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControl: false
  }
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  setMarkers(map, allMarkers);
}

function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i];
    var myLatLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: loc[0]
    });
    
    var infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', (function(marker) {
      return function () {
        var content = '<div id="userwindow">'+
      '<div id="profilepic">Hello</div>'+
      '<div id="description">You</div>'+
      '<div id="addToMap">Add To Map</div>'+
      '</div>';
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
      }
    })(marker));
    google.maps.event.addListener(marker, 'mouseout', (function(marker) {
      return function() {
        infoWindow.close();
      }
    })(marker));
  }
}

google.maps.event.addDomListener(window, 'load', initialize);