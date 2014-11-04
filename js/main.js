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
  controlText.style.paddingLeft = '20px';
  controlText.style.paddingRight = '20px';
  controlText.innerHTML = '<b>Classes</b>';
  controlUI.appendChild(controlText);
  
  var controlUI2 = document.createElement('div');
  controlUI2.style.backgroundColor = 'white';
  controlUI2.style.borderStyle = 'solid';
  controlUI2.style.borderWidth = '2px';
  controlUI2.style.cursor = 'pointer';
  controlUI2.style.textAlign = 'center';
  controlUI2.style.title = 'Main button interface';
  controlDiv.appendChild(controlUI2);
  
  //set CSS for control interior
  var controlText2 = document.createElement('div');
  controlText2.style.fontFamily = 'Arial,sans-serif';
  controlText2.style.fontSize = '12px';
  controlText2.style.paddingLeft = '20px';
  controlText2.style.paddingRight = '20px';
  controlText2.innerHTML = '<b>Area</b>';
  controlUI2.appendChild(controlText2);
  
  //click
  
  google.maps.event.addDomListener(controlUI, 'click', function(){
    map.setCenter(champaignUrbana)
  });
  
  google.maps.event.addDomListener(controlUI2, 'click', function(){
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