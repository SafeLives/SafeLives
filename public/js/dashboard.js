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
    ['Mushrooms', 5],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);
  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
    'height': '100%',
    colors: ['#64b5f6', '#00bcd4', '#f44336', '#9c27b0', '#e91e63']
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);
}

function lineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart2'));

  chart.draw(data, options);
}

function columnChart1() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, 'color: #64b5f6'],
    ["Silver", 10.49, "color: #00bcd4"],
    ["Gold", 19.30, "color: #f44336"],
    ["Platinum", 21.45, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart3"));
  chart.draw(view, options);
}

function columnChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, 'color: #64b5f6'],
    ["Silver", 10.49, "color: #00bcd4"],
    ["Gold", 19.30, "color: #f44336"],
    ["Platinum", 21.45, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
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
    ["Copper", 8.94, 'color: #64b5f6'],
    ["Silver", 10.49, "color: #00bcd4"],
    ["Gold", 19.30, "color: #f44336"],
    ["Platinum", 21.45, "color: #9c27b0"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
  2]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart5"));
  chart.draw(view, options);
}
