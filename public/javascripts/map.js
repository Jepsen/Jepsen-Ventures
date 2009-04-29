$(document).ready(function() {
  if (document.getElementById('map')) { load(); } 
});

$(document).unload(function() {
  if (document.getElementById('map')) { GUnload(); }
});

function load() {
  if (GBrowserIsCompatible()) {
    var point = new GLatLng($('.geo .latitude').text(), $('.geo .longitude').text());
    var map = new GMap2(document.getElementById("map"));
    map.setCenter(point, 16);
    map.addControl(new GLargeMapControl());
    
    var pushPin = new GIcon(G_DEFAULT_ICON);
    pushPin.image = "http://maps.google.com/mapfiles/ms/icons/blue-pushpin.png";
    pushPin.iconSize = new GSize(32, 32);
    pushPin.iconAnchor = new GPoint(0, 0);
    
    markerOptions = { icon:pushPin };
    
    map.addOverlay(new GMarker(point, markerOptions));
  }
}

window.onload = function() {  
};

window.onunload = function() {  }; 