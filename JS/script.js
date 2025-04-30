let map;

function myMap() {
  const location = { lat:41.8299, lng: 87.6337};
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
  const map = new google.maps.Map(document.getElementById("map"),{
  zoom:12,
  center: location,
  
   const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "White Soxs",
  });
  }
  
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  
  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>White Sox</h2><p>This is the White Sox Stadium.</p>",
  });
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

var image = document.getElementById("image");
image.onclick = function(e) {
  window.alert("You clicked the image");
  window.location.href = "page3,html";
}  

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>