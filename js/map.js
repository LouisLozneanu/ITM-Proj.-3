function initMap() {
    var myLocation = { lat: 41.83566926343903, lng: -87.62569531405664 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    });

    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: 'IIT MTCC'
    });

    var contentString = '<h1>IIT MTCC</h1><p>The McCormick Tribune Campus Center</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
    });
}
