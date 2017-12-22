mapView = false;
$(function() {
    // $('#content section:first-child').addClass('present');
    setMapText();
    $('#box').slideDown();
    $('#box').mCustomScrollbar({
        theme: 'minimal-dark'
    });

    $('#toggle').click(function() {
        $('#box').slideToggle();
        mapView = !mapView;
        setMapText();
    });

    function setMapText() {
        (mapView) ? $('#toggle-btn').text('Go to Info') : $('#toggle-btn').text('Go To Map');
    }
});

function initMap() {
    var mapData = getMapData();
    var markers = [];

    var map = new google.maps.Map(document.getElementById('map'), mapData.location);
    // map.setOptions({
    //     styles: JSON.parse(mapData.style.json)
    // });

    // Add markers
    for (var i in mapData.markers) {
        var marker = new google.maps.Marker({
            position: mapData.markers[i].location,
            title: mapData.markers[i].name,
            map: map
        });
        markers.push(marker);
    }

    // Add polyline
    var route = new google.maps.Polyline({
        path: mapData.route,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: 0.75,
        strokeWeight: 3
    });
    route.setMap(map);
}

function getMapData() {
    return {
        "location": {
            "zoom": 14,
            "center": {
                "lat": 19.115297,
                "lng": 72.83686
            }
        },
        "markers": [{
            "id": "5f585463-5e0e-474c-8f10-7577ee96710c",
            "icon": {
                "type": "styled",
                "styledMarkerId": 4,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "location": {
                "lat": 19.098624,
                "lng": 72.826781
            },
            "name": "Ramada"
        }, {
            "id": "e05c91af-1d24-4423-bfb0-df35ce6445c6",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "1 - Juhu Tara Road",
            "location": {
                "lat": 19.104146,
                "lng": 72.829845
            }
        }, {
            "id": "cfee64cd-126e-4c61-9adf-77630ecbf971",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "2 - Kafi Azmi Park",
            "location": {
                "lat": 19.110278,
                "lng": 72.829858
            }
        }, {
            "id": "32431cf7-4292-44b3-8e2f-74019e81aec3",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "3 - Juhu Circle",
            "location": {
                "lat": 19.116087,
                "lng": 72.829886
            }
        }, {
            "id": "ed2d3519-db1a-49d4-becf-360ec3fb3fd6",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "4 - D.N. Nagar Police Station",
            "location": {
                "lat": 19.122215,
                "lng": 72.829801
            }
        }, {
            "id": "23824bfe-59e9-4bc0-92de-1add83fd5a37",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "location": {
                "lat": 19.128114,
                "lng": 72.831025
            },
            "name": "5 - D.N. Nagar Metro Station",
        }, {
            "id": "b83a3528-379b-49be-87fb-15a0ef596c7b",
            "icon": {
                "type": "styled",
                "styledMarkerId": 3,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "6 - Andheri Sports Complex",
            "location": {
                "lat": 19.127301,
                "lng": 72.836089
            }
        }, {
            "id": "a38f4b2c-38b3-4882-85d3-286b78a423bd",
            "icon": {
                "type": "styled",
                "styledMarkerId": 4,
                "color": "#f44336",
                "size": 40,
                "width": 36,
                "height": 36,
                "anchorX": 18,
                "anchorY": 36
            },
            "name": "Bhavans",
            "location": {
                "lat": 19.123497,
                "lng": 72.836039
            }
        }],
        "route": [{
            "lat": 19.098624,
            "lng": 72.826781
        }, {
            "lat": 19.104855,
            "lng": 72.826682
        }, {
            "lat": 19.104146,
            "lng": 72.829845
        }, {
            "lat": 19.110278,
            "lng": 72.829858
        }, {
            "lat": 19.116087,
            "lng": 72.829886
        }, {
            "lat": 19.122215,
            "lng": 72.829801
        }, {
            "lat": 19.128114,
            "lng": 72.831025
        }, {
            "lat": 19.127301,
            "lng": 72.836089
        }, {
            "lat": 19.123497,
            "lng": 72.836039
        }],
        "style": {
            "id": 18625,
            "name": "Flat Design Map",
            "createdBy": "dsquared",
            "url": "https://snazzymaps.com/style/18625/flat-design-map",
            "imageUrl": "https://snazzy-maps-cdn.azureedge.net/assets/18625-flat-design-map.png?v=20170626062703",
            "json": "[{\"featureType\":\"all\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"},{\"color\":\"#5b6571\"},{\"lightness\":\"35\"}]},{\"featureType\":\"administrative.neighborhood\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#f3f4f4\"}]},{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry\",\"stylers\":[{\"weight\":0.9},{\"visibility\":\"off\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#83cead\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#ffffff\"}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#fee379\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway.controlled_access\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"},{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#7fc8ed\"}]}]"
        },
        "details": {
            "name": "SPIT Marathon",
            "apiKey": "AIzaSyDiwQbU__Cn8sCKGTnW8YoRS9vT0_F1M30"
        }
    };
}