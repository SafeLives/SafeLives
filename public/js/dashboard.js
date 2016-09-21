// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(pieChart);
google.charts.setOnLoadCallback(lineChart);
google.charts.setOnLoadCallback(columnChart1);
google.charts.setOnLoadCallback(columnChart2);
google.charts.setOnLoadCallback(columnChart3);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function pieChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['1 week', 2],
    ['2 weeks', 1],
    ['1 month', 4],
    ['6 months', 2],
    ['1 year', 2]
  ]);
  // Set chart options
  var options = {'title':'Time to close case',
    'height': '100%',
    colors: ['#64b5f6', '#00bcd4', '#f44336', '#9c27b0', '#e91e63']
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);
}

function lineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Opened', 'Closed'],
    ['2004',  1000,      400],
    ['2005',  1500,      956],
    ['2006',  2531,      1756],
    ['2007',  5411,      3521]
  ]);

  var options = {
    title: 'Total Cases vs Cases Closed',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart2'));

  chart.draw(data, options);
}

function columnChart1() {
  var data = google.visualization.arrayToDataTable([
    ["Type", "Regularity", { role: "style" } ],
    ["Physical", 10, 'color: #64b5f6'],
    ["Sexual", 20.51, "color: #00bcd4"],
    ["Harrassment", 15.30, "color: #f44336"],
    ["Jealous", 12.69, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Abuse by Type",
    width: '100%',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart3"));
  chart.draw(view, options);
}

function columnChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Rating", "Density", { role: "style" } ],
    ["0-2", 8.94, 'color: #64b5f6'],
    ["3-5", 10.49, "color: #00bcd4"],
    ["6-7", 19.30, "color: #f44336"],
    ["8-10", 21.45, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Severity of Case",
    width: '100%',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart4"));
  chart.draw(view, options);
}

function columnChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["South", 118.94, 'color: #64b5f6'],
    ["North", 10.49, "color: #00bcd4"],
    ["East", 19.30, "color: #f44336"],
    ["West", 21.45, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Location",
    width: '100%',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart5"));
  chart.draw(view, options);
}
