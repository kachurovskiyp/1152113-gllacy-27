function initMap() {
    var coordinates = {lat: 59.938706, lng: 30.323097},
        markerImage = 'img/ice-creame-pin.png';

    var map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates
    });

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}
