
function updateMap(v) {
  document.getElementById('container-map').innerHTML = "<div class='map' id='map'></div>";
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
  var e = document.getElementById("selectData");
  var strData = e.options[e.selectedIndex].value;

  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    //console.log(props)
      this._div.innerHTML = '<h4>'+ labels[v].title + '</h4>' +
      (props ? '<b>' + props.region_name + '</b><br />' + props[v].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' ' + labels[v].type : 'Hover over a region');

      if (document.getElementById("description") != null) {
        document.getElementById("description").innerHTML = '<b>Description:</b>' + '<br /><p>' + labels[v].description + '</p>';
      }

      if (document.getElementById("data-source") != null) {
        document.getElementById("data-source").innerHTML = '<b>Data source:</b>' + '<br /><p>' + labels[v].source + '</p>';
      }
  };

  info.addTo(map);

  function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '8',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties[v])
      };
  }

  function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
          weight: 4,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.5
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
      }

      info.update(layer.feature.properties);

  }

  var step = []

  function findMax(features, prop) {
    properties = [];

    for (var i = 0 ; i < features.length ; i++) {
      //console.log(features[i]['properties'][prop])
      properties.push(features[i]['properties'][prop]);
    }
    max = Math.max(...properties);

    return max;
  }

  function findMin(features, prop) {
    properties = [];

    for (var i = 0 ; i < features.length ; i++) {
      //console.log(features[i]['properties'][prop])
      properties.push(features[i]['properties'][prop]);
    }
    max = Math.min(...properties);

    return max;
  }

  function interval(features, prop) {
    //min = findMin(features, prop)
    min = 0
    max = findMax(features, prop)

    diff = Math.round((max - min)/7)

    console.log(min, max, diff)

    steps = [min+(diff*6),min+(diff*5), min+(diff*4), min+(diff*3), min+(diff*2),min+diff, min]
    return steps
  }

  step = interval(regionsData['features'], v)

  function getColor(d) {
    return d > step[0]   ? '#620060' :
             d > step[1]   ? '#9f0e7f' :
             d > step[2]   ? '#d43491' :
             d > step[3]   ? '#f367a1' :
             d > step[4]   ? '#fa9cb4' :
             d > step[5]   ? '#fdc5c4' :
             d > step[6]   ? '#ffded9' :
                        '#fffff';
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

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
          grades = [step[6], step[5], step[4], step[3], step[2], step[1], step[0]],
          labels = [];

        for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }


        return div;
  };

  legend.addTo(map);

  geojson = L.geoJson(regionsData, {
   style: style,
   onEachFeature: onEachFeature
  }).addTo(map);
}
