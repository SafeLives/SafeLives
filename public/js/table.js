
const testArray = [{
  'Insights Number': 'DD4056',
  'Caseworker': 'Richard Warren',
  'ClientID': '938592',
  'Date of Birth': '20/04/1889',
  'Intake Date': '01/09/1939',
  'Exit Date': '02/09/1945',
  intakeForm: 'Yes',
  exitForm: 'No',
  ccjForm: 'Yes'
},
{
  'Insights Number': 'DD4056',
  'Caseworker': 'Troy Maedar',
  'ClientID': '938592',
  'Date of Birth': '20/04/1889',
  'Intake Date': '01/09/1939',
  'Exit Date': '02/09/1945',
  intakeForm: 'Yes',
  exitForm: 'No',
  ccjForm: 'Yes'
},
{
  'Insights Number': 'DD4056',
  'Caseworker': 'Matt Sharp',
  'ClientID': '938592',
  'Date of Birth': '20/04/1889',
  'Intake Date': '01/09/1939',
  'Exit Date': '02/09/1945',
  intakeForm: 'Yes',
  exitForm: 'No',
  ccjForm: 'Yes'
},
{
  'Insights Number': 'DD4056',
  'Caseworker': 'Jakub Silva',
  'ClientID': '938592',
  'Date of Birth': '20/04/1889',
  'Intake Date': '01/09/1939',
  'Exit Date': '02/09/1945',
  intakeForm: 'Yes',
  exitForm: 'No',
  ccjForm: 'Yes'
},
{
  'Insights Number': 'DD4056',
  'Caseworker': 'Joseph Stalin',
  'ClientID': '938592',
  'Date of Birth': '20/04/1889',
  'Intake Date': '01/09/1939',
  'Exit Date': '02/09/1945',
  intakeForm: 'Yes',
  exitForm: 'No',
  ccjForm: 'Yes'
}]

function clearTableRows(id) {
  let table = document.getElementById(id);
  table.innerHTML = '';
}

function addTableRows(id, rowArray) {
  let table = document.getElementById(id);
  rowArray.map((row) => {
    let tableRow = document.createElement('tr');
    for (var key in row) {
      if (!row.hasOwnProperty(key)) continue;
      let col = document.createElement('td');
      col.innerHTML = row[key];
      tableRow.appendChild(col);
    };
    table.appendChild(tableRow);
  });
}

function searchTable(id, searchTerm, rowArray, filter = null) {
  let table = document.getElementById(id);
  return rowArray.filter((row) => {
    let arr = [];
    for (var key in row) {
      if (!row.hasOwnProperty(key)) continue;
      if (filter != null && filter != 'all') {
        if (row[key].includes(searchTerm) && key === filter) {
          arr.push(row[key]);
        }
      } else {
        if (row[key].includes(searchTerm)) {
          arr.push(row[key]);
        }
      }
    }
    if (arr.length > 0) {
      return true
    }
    return false
  });
}

$("#dropdown1 a").click(function() {
  let text = this.innerHTML;
  $('#searchFilterText').html(text);
});

$("#searchAdminForm").on('submit', function(event) {
  event.preventDefault();
  let filter = $('#searchFilterText')[0].innerHTML;
  let searchTerm = $('#searchCaseWorkerAdmin')[0].value;
  clearTableRows('caseworkerAdminTable');
  if (filter === 'Any' || filter === 'search by') {
    addTableRows('caseworkerAdminTable', searchTable('caseworkerAdminTable', searchTerm, testArray));
  } else {
    addTableRows('caseworkerAdminTable', searchTable('caseworkerAdminTable', searchTerm, testArray, filter));
  }
})

clearTableRows('caseworkerAdminTable');
addTableRows('caseworkerAdminTable', searchTable('caseworkerAdminTable', '', testArray));

