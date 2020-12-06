$(document).ready(function(){
	
	$('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
	});
});
function initMap() {
    const cairo = { lat: 43.32152, lng: 76.957857 };
    const map = new google.maps.Map(document.getElementById("map"), {
      scaleControl: true,
      center: cairo,
      zoom: 15,
    });
    const infowindow = new google.maps.InfoWindow();
    infowindow.setContent("<b>Blue Star of Kazakhstan, Mercedes-Benz</b>");
    const marker = new google.maps.Marker({ map, position: cairo });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
}