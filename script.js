function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");

  // Create a new row
  var newRow = table.insertRow(0);

  // Create cells for the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
 
  // Set the cell content
  cell1.innerHTML = "New cell1";
  cell2.innerHTML = "New cell2";
  
}
