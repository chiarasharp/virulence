
var map = L.map('map').setView([41.467,12.700], 6);

//var url_json_regions = "https://gist.githubusercontent.com/datajournalism-it/48e29e7c87dca7eb1d29/raw/2636aeef92ba0770a073424853f37690064eb0ea/regioni.geojson"

//var region_layer = new L.GeoJSON.AJAX(url_json_regions, region_style)


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2hpYXJhbWFuY2EiLCJhIjoiY2t3dXV6Y293MXUxcTJ2bGNmZ3RqdGpodyJ9.OboyY6QPcmsfsNW8BL7mlQ'
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Region</h4>' +  (props ?
        '<b>' + props.NOME_REG + '</b><br />'
        : 'Hover over a region');
};

info.addTo(map);

function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '8',
      fillOpacity: 0.2,
      fillColor: 'green'
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'green',
        dashArray: '',
        fillOpacity: 0.5
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}


var geojson;
function resetHighlight(e) {
    geojson.setStyle(style);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

/*geojson = $.getJSON("regioni.geojson", function (data) { // pull data from external file
   L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);
});*/

geojson = L.geoJson(regionsData, {
 style: style,
 onEachFeature: onEachFeature
}).addTo(map);
