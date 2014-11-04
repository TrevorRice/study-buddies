var champaignUrbana = new google.maps.LatLng(40.1145152, -88.2296416);
var map;
//homeControl adds control to map temporary

function HomeControl(controlDiv, map){
  controlDiv.style.padding = '5px';
  
  //set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.style.title = 'Main button interface';
  controlDiv.appendChild(controlUI);
  
  //set CSS for control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Hi</b>';
  controlUI.appendChild(controlText);
  
  //click
  
  google.maps.event.addDomListener(controlUI, 'click', function(){
    map.setCenter(champaignUrbana)
  });
}


function initialize() {
  var mapOptions = {
    center: champaignUrbana,
    zoom: 18,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControl: false
  };

  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map);
  
  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeControlDiv);
}



google.maps.event.addDomListener(window, 'load', initialize);