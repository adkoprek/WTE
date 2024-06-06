var current_element = 0;
const cards = document.getElementById("cards");

$("#cards").scroll(function(e) {
    $("#cards").scrollLeft(0);
});

const cors = [
    {name: "Vergari",       lat: 47.49408367553803, lng: 8.252685464060972},
    {name: "Spar",          lat: 47.49454762078298, lng: 8.252674758317903},
    {name: "Frei",          lat: 47.49354291292525, lng: 8.253026511832582},
    {name: "Turgi Point",   lat: 47.49285633463225, lng: 8.253619534438288},
    {name: "Avec",          lat: 47.49228475846443, lng: 8.252747971342414}
];
var markers = []
var icon96;
var icon48;
function initMap() { 
    icon48 = {
        url: "assets/marker48.png",
        scaledSize: new google.maps.Size(60, 60), 
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 0)
    };
    icon96 = {
        url: "assets/marker96.png",
        scaledSize: new google.maps.Size(96, 96), 
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 0)
    };

    var map = new google.maps.Map(document.getElementById('map'), { 
        zoom: 18, 
        center: {lat: 47.49168475846443, lng: 8.252947971342414}
    }); 

    cors.forEach((cor) => { 
        var marker = new google.maps.Marker({
            position: {lat: cor.lat, lng: cor.lng},
            map: map,
            icon: icon48
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
        google.maps.event.addListener(marker, 'click', () => scroll_to(cors.indexOf(cor)));
        markers.push(marker);
    });
    scroll_to(0);
} 

function scroll_to(index) {
    markers.forEach((marker) => {
        marker.setIcon(icon48);
        marker.setAnimation(null);
    });

    var marker = markers[index];
    marker.setIcon(icon96);
    marker.setAnimation(google.maps.Animation.BOUNCE);

    current_element = index;

    cards.style.left = ((-index) * window.innerWidth) + 'px';
}
