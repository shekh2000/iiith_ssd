/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
function funt()
{
  var table = document.getElementById("newtable");
   var num_row=table.rows.length;
  var row= table.insertRow(num_row);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = document.getElementById("roll").value;
  cell2.innerHTML = document.getElementById("name").value;
}

function funt2()
{
  var table = document.getElementById("newtable");
  var num_row=table.rows.length;
  var row=table.deleteRow(num_row-1); 
}

