// function initMap() {
//     var center = {
//         lat: 19.1226606,
//         lng: 72.8270245
//     };
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: center
//     });
// }

mapView = false;

$(function () {
    // $('#content section:first-child').addClass('present');
    setMapText();
    $('#box').slideDown();
    $('#box').mCustomScrollbar({
        theme: 'minimal-dark'
    });

    $('#toggle').click(function () {
        $('#box').slideToggle();
        mapView = !mapView;
        setMapText();
    });

    function setMapText() {
        (mapView) ? $('#toggle-btn').text('Go to Info') : $('#toggle-btn').text('Go To Map');
    }
});