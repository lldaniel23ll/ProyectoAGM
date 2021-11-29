function iniciarMap(){
    var coord = {lat:12.1169901 ,lng: -86.2504503};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}