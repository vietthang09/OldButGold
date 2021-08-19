// Tool tip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // End Tool tip

// Back to top
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// End Back to top

// Map
$(document).ready(function() {
    var mapObj = null;
    var defaultCoord = [46.829853, -71.254028];
    var zoomLevel = 8;
    var mapConfig = {
        attributionControl: false,
        center: defaultCoord,
        zoom: zoomLevel,
    };

    mapObj = L.map('map', mapConfig);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapObj);
    // Markers
    var marker_coord1 = [46.829853, -71.254028];
    var popup_option1 = {
        className: "map-popup-content",
    };

    var popup_content1 = `<div class='left'>
                        <img src='resources/images/avatar/01.jpg'/>
                    </div>
                    <div class='right'>
                        <h6>i'm selling trousers</h6>
                        <a href="item-detail/trousers.html">Click to view more</a>
                    </div>
                    <div class='clearfix'></div>`;

    var popup1 = L.popup(popup_option1);
    popup1.setContent(popup_content1);

    var marker = L.marker(marker_coord1).addTo(mapObj);
    // binding popup to marker
    marker.bindPopup(popup1);

    var marker_coord2 = [47, -71.254028];
    var popup_option2 = {
        className: "map-popup-content",
    };

    var popup_content2 = `<div class='left'>
                        <img src='resources/images/avatar/02.jpg'/>
                    </div>
                    <div class='right'>
                        <h6>i'm White Fur Slippers</h6>
                        <a href="item-detail/white_fur_slippers.html">Click to view more</a>
                    </div>
                    <div class='clearfix'></div>`;

    var popup2 = L.popup(popup_option2);
    popup2.setContent(popup_content2);

    var marker = L.marker(marker_coord2).addTo(mapObj);
    // binding popup to marker
    marker.bindPopup(popup2);

    var marker_coord3 = [46.5, -71.254028];
    var popup_option3 = {
        className: "map-popup-content",
    };

    var popup_content3 = `<div class='left'>
                        <img src='resources/images/avatar/03.jpg'/>
                    </div>
                    <div class='right'>
                        <h6>i'm selling Swiss Court Pro II</h6>
                        <a href="item-detail/swiss_court_pro_II.html">Click to view more</a>
                    </div>
                    <div class='clearfix'></div>`;

    var popup3 = L.popup(popup_option3);
    popup3.setContent(popup_content3);

    var marker = L.marker(marker_coord3).addTo(mapObj);
    // binding popup to marker
    marker.bindPopup(popup3);
});
// End Map

// Carousel
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            // nav: false,
        },
        600: {
            items: 1,
            // nav: false,
        },
        1000: {
            items: 1,
            // nav: false,
        }
    }
});
// End Carousel

// Toast
var option = {
    animation: true,
    delay: 2000,
};

function Toasty() {
    var toastHTMLElement = document.getElementById('Toast-add-to-cart');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}
// End Toast