var map;
var myLoc;
var markers = [];
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var allMarkers = [
  ['My Location', 40.1145152, -88.2296416, 'You', 'Studying for midterm.'],
  ['Siebel1', 40.1140258, -88.2248073, 'Name', 'Description.'],
  ['Siebel2', 40.1141296, -88.2248938, 'Shaun Chung', 'Working on homework.'],
  ['Siebel3', 40.1141942, -88.2248744, 'Name', 'Description.'],
  ['DCL1', 40.113138, -88.226661, 'Name','Description.'],
  ['DCL2', 40.113259, -88.226775, 'Name', 'Description.'],
  ['ECE1', 40.1147211, -88.2278546, 'Name', 'Description.'],
  ['ECE2', 40.1147511, -88.2279546, 'Name', 'Description.'],
  ['Grainger1', 40.112631, -88.226893, 'Name', 'Description.'],
  ['Grainger2', 40.112531, -88.226993, 'Name', 'Description.'],
  ['Grainger3', 40.112531, -88.226793, 'Name', 'Description.'],
  ['Grainger4', 40.112431, -88.226893, 'Ketian Zhang', 'Studying for midterm.'],
  ['Grainger5', 40.112431, -88.226993, 'Name', 'Description.'],
  ['House1', 40.113649, -88.231620, 'Name', 'Description.'],
  ['House2', 40.114789, -88.233132, 'Name', 'Description.'],
  ['House3', 40.115191, -88.233819, 'Name', 'Description.']
];

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
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

  directionsDisplay.setMap(map);
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
    google.maps.event.addListener(marker, 'click', (function(marker) {
      return function () {
        var content;

        if(marker == markers[0]) {
          content = '<div id="userwindow">'+
          '<div id="myprofilepic"></div>'+
          '<div id="description"><h3>'+
          allMarkers[0][3]+
          '</h3><p>'+
          allMarkers[0][4]+
          '</p></div>'+
          '<div id="addToMap">Add To Map</div>'+
          '</div>';
        }
        else if(marker == markers[2]) {
          content = '<div id="userwindow">'+
          '<div id="profilepic"></div>'+
          '<div id="description"><h3>'+
          allMarkers[2][3]+
          '</h3><p>'+
          allMarkers[2][4]+
          '</p></div>'+
          '<div id="userButtons">'+
          '<button type="button" onclick="showChat()">Chat</button>'+
          '<button type="button" onclick="addFriendS()">Add</button>'+
          '<button type="button" onclick="getDirectionsShaun()">Directions</button>'+
          '</div>'+
          '</div>';
        }
        else if(marker == markers[11]) {
          content = '<div id="userwindow">'+
          '<div id="profilepic"></div>'+
          '<div id="description"><h3>'+
          allMarkers[11][3]+
          '</h3><p>'+
          allMarkers[11][4]+
          '</p></div>'+
          '<div id="userButtons">'+
          '<button type="button">Chat</button>'+
          '<button type="button" onclick="addFriendK()">Add</button>'+
          '<button type="button" onclick="getDirectionsKetian()">Directions</button>'+
          '</div>'+
          '</div>';
        }
        else {
          content = '<div id="userwindow">'+
          '<div id="profilepic"></div>'+
          '<div id="description"><h3>'+
          loc[3]+
          '</h3><p>'+
          loc[4]+
          '</p></div>'+
          '<div id="userButtons">'+
          '<button type="button">Chat</button>'+
          '<button type="button" onclick="addFriend()">Add</button>'+
          '<button type="button">Directions</button>'+
          '</div>'+
          '</div>';
        }
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
    })(marker));
  }
}

// Change markers given specified course
function changeEventHandler(event) {
  directionsDisplay.setMap(null);

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

// Get directions to either Shaun or Ketian
function getDirectionsShaun() {
  var start = myLoc;
  var end = new google.maps.LatLng(allMarkers[2][1],allMarkers[2][2]);

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(result, status) {
    if(status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

function getDirectionsKetian() {
  var start = myLoc;
  var end = new google.maps.LatLng(allMarkers[11][1],allMarkers[11][2]);

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if(status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

// Add person to friend's list
function addFriendS() {
  var ul = document.getElementById("dropdown");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode("Shaun Chung"));
  ul.appendChild(li);
}

function addFriendK() {
  var ul = document.getElementById("dropdown");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode("Ketian Zhang"));
  ul.appendChild(li);
}

function addFriend() {
  var ul = document.getElementById("dropdown");
  var li = document.createElement("li");

  li.appendChild(document.createTextNode("Another Friend"));
  ul.appendChild(li);
}

/*(function() {

  $('#chat header').on('click', function() {

    $('.chat').slideToggle(300, 'swing');
    //$('.chat-message-counter').fadeToggle(300, 'swing');

  });

  $('.chat-close').on('click', function(e) {

    e.preventDefault();
    $('#chat').fadeOut(300);

  });

}) ();*/

function minChat() {
  $('.chat').slideToggle(300, 'swing');
}

function closeChat() {
  $('#chat').fadeOut(300);
}

function showChat() {
  document.getElementById("chat").style.display = "block";
}
google.maps.event.addDomListener(window, 'load', initialize);