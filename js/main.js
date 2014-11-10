var map;
var myLoc;
var markers = [];
//var windows = [];

var allMarkers = [
  ['My Location', 40.1145152, -88.2296416],
  ['Siebel1', 40.1140258, -88.2248073],
  ['Siebel2', 40.1141296, -88.2248938],
  ['Siebel3', 40.1141942, -88.2248744],
  ['DCL1', 40.113138, -88.226661],
  ['DCL2', 40.113259, -88.226775],
  ['ECE1', 40.1147211, -88.2278546],
  ['ECE2', 40.1147511, -88.2279546],
  ['Grainger1', 40.112631, -88.226893],
  ['Grainger2', 40.112531, -88.226993],
  ['Grainger3', 40.112531, -88.226793],
  ['Grainger4', 40.112431, -88.226893],
  ['Grainger5', 40.112431, -88.226993],
  ['House1', 40.113649, -88.231620],
  ['House2', 40.114789, -88.233132],
  ['House3', 40.115191, -88.233819]
];

function initialize() {
  myLoc = new google.maps.LatLng(40.1145152,-88.2296416);

  var mapOptions = {
    center: myLoc,
    zoom: 18,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    streetViewControl: false
  }
  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  setMarkers(map, allMarkers);
}

function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i];
    var myLatLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
    markers.push(marker);

    var infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'mouseover', (function(marker) {
      return function () {
        var content;

        if(marker == markers[0]) {
          content = '<div id="userwindow">'+
          '<div id="profilepic"></div>'+
          '<div id="description">You</div>'+
          '<div id="addToMap">Add To Map</div>'+
          '</div>';
        }
        else {
          content = '<div id="userwindow">'+
          '<div id="profilepic"></div>'+
          '<div id="description">You</div>'+
          '<div id="userButtons">Buttons</div>'+
          '</div>';
        }
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
    })(marker));
    //windows.push(infoWindow);
    google.maps.event.addListener(marker, 'mouseout', (function(marker) {
      return function() {
        infoWindow.close();
      }
    })(marker));
  }
}

// Change markers given specified course
function changeEventHandler(event) {
  for (var i = 1; i < markers.length; i++) {
    markers[i].setVisible(true);
  }

  if(event.target.value == 'all') {
    for (var i = 1; i < markers.length; i++) {
      markers[i].setVisible(true);
    }
  }
  // Use markers: 2,3,4,5,11,14,15
  else if(event.target.value == '465') {
    markers[1].setVisible(false);
    markers[6].setVisible(false);
    markers[7].setVisible(false);
    markers[8].setVisible(false);
    markers[9].setVisible(false);
    markers[10].setVisible(false);
    markers[12].setVisible(false);
    markers[13].setVisible(false);
  }
  // Use markers: 6,7,8
  else if(event.target.value == '411') {
    markers[1].setVisible(false);
    markers[2].setVisible(false);
    markers[3].setVisible(false);
    markers[4].setVisible(false);
    markers[5].setVisible(false);
    markers[9].setVisible(false);
    markers[10].setVisible(false);
    markers[11].setVisible(false);
    markers[12].setVisible(false);
    markers[13].setVisible(false);
    markers[14].setVisible(false);
    markers[15].setVisible(false);
  }
  // Use markers: 1,9,10,12,13
  else if(event.target.value == '374') {
    markers[2].setVisible(false);
    markers[3].setVisible(false);
    markers[4].setVisible(false);
    markers[5].setVisible(false);
    markers[6].setVisible(false);
    markers[7].setVisible(false);
    markers[8].setVisible(false);
    markers[11].setVisible(false);
    markers[14].setVisible(false);
    markers[15].setVisible(false);
  }
}

// Change zoom given by distance
function changeZoomHandler(event) {
  if(event.target.value == '.25') {
    map.setZoom(18);
  }
  else if(event.target.value == '.5') {
    map.setZoom(17);
  }
  else if(event.target.value == '1') {
    map.setZoom(16);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);