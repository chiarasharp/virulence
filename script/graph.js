var chart;

// DESTROY CHART
function destroyChart() {
  if (chart != null){
    chart.destroy();
  }
}

// UPDATE CHART
function updateChart() {
  destroyChart();
  var v1 = document.getElementById('selectGraph1').value;
  var v2 = document.getElementById('selectGraph2').value;

  // setting up the metadata of the selected datasets
  if (document.getElementById("description1") != null) {
    document.getElementById("description1").innerHTML = '<b>Description:</b>' + '<br /><p>' + labels[v1].description + '</p>';
  }
  if (document.getElementById("data-source1") != null) {
    document.getElementById("data-source1").innerHTML = '<b>Data source:</b>' + '<br /><p>' + labels[v1].source + '</p>';
  }
  if (document.getElementById("description2") != null) {
    document.getElementById("description2").innerHTML = '<b>Description:</b>' + '<br /><p>' + labels[v2].description + '</p>';
  }
  if (document.getElementById("data-source2") != null) {
    document.getElementById("data-source2").innerHTML = '<b>Data source:</b>' + '<br /><p>' + labels[v2].source + '</p>';
  }

  // getting the data to show in the chart
  function chartData(features, prop) {
    properties = [];

    for (var i = 0 ; i < features.length ; i++) {
      properties.push(features[i]['properties'][prop]);
    }

    return properties;
  }

  // getting italian regions names  for labeling
  function regionsNames(features) {
    names = [];

    for (var i = 0 ; i < features.length ; i++) {
      names.push(features[i]['properties']['region_name']);
    }

    return names;
  }

  // initializing the line chart
  chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: regionsNames(regionsData['features']),
      datasets: [
      {
        label: labels[v1].title,
        borderColor:  "#7cd946",
        fill: true,
        lineTension: 0.2,
        data: chartData(regionsData['features'], v1),
        yAxisID: 'y'
      },
      {
        label: labels[v2].title,
        borderColor: "#9e153b",
        fill: true,
        lineTension: 0.2,
        data: chartData(regionsData['features'], v2),
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    }
  });

}
