
const testArray = [];

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
      if (key === 'intakeForm' || key === 'exitForm' || key === 'ccjForm') {
        let link = document.createElement('a');
        switch(key) {
          case 'intakeForm':
            link.href = './insights_intake.html'
            break;
          case 'exitForm':
            link.href = './insights_exit_final.html'
            break;
          default:
            link.href = "./insights_CJF_final.html"
        }
        link.innerHTML = row[key];
        col.appendChild(link);  
      } else {
        col.innerHTML = row[key];
      }
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
        console.log(row, key)
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

function randomDateBetween(startYear, endYear) {
  const day = Math.ceil(Math.random() * 28);
  const month = Math.ceil(Math.random() * 12);
  const year = Math.round(Math.random() * (endYear - startYear)) + startYear;
  return day + '/' + month + '/' + year;
}

function randYorN() {
  return Math.random() > 0.5 ? 'Yes' : 'No';
}

function randomRow() {
  return {
    'Insights Number': 'DD' + Math.round(Math.random() * 5000),
    'Caseworker': 'Dick Turpin',
    'ClientID': Math.round(Math.random() * 1000000).toString(),
    'Date of Birth': randomDateBetween(1950, 1990),
    'Intake Date': randomDateBetween(2005, 2008),
    'Exit Date': randomDateBetween(2009, 2014),
    intakeForm: randYorN(),
    exitForm: randYorN(),
    ccjForm: randYorN()
  };
}

$("#addNewBarcode").on('click', function(event) {
  event.preventDefault();
  const barcode = randomRow();
  testArray.push(barcode);
  console.log(testArray)
  clearTableRows('caseworkerAdminTable');
  addTableRows('caseworkerAdminTable', searchTable('caseworkerAdminTable', '', testArray));
})

testArray.push(randomRow())
testArray.push(randomRow())
testArray.push(randomRow())
testArray.push(randomRow())
testArray.push(randomRow())
testArray.push(randomRow())

clearTableRows('caseworkerAdminTable');
addTableRows('caseworkerAdminTable', searchTable('caseworkerAdminTable', '', testArray));

