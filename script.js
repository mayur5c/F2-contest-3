// c:\Users\mayur\OneDrive\Desktop\Accio Job Course\Module 6\F2 Contest 3\script.js (javascript)
// Get the table element
    let table = document.getElementById("table");

    // Get the create button
    let create = document.getElementById("create");

    // Get the save button
    let save = document.getElementById("save");

    // Initialize an array to store the table data
    let tableData = [];

    // Initialize a variable to keep track of the row ID
    let rowId = 0;

    // Add a click event listener to the create button
    create.addEventListener("click", function() {
      // Increment the row ID
      rowId++;

      // Create a new table row element
      let tr = document.createElement("tr");

      // Create an array to store the data for the new row
      let rowData = [];

      // Loop through the number of columns (6)
      for (let i = 0; i < 6; i++) {
        // Create a new table cell element
        let td = document.createElement("td");

        // If it is the first column (ID)
        if (i == 0) {
          // Set the text content of the cell to the row ID
          td.textContent = rowId;

          // Push the row ID to the rowData array
          rowData.push(rowId);
        } else {
          // Otherwise, create a new input element of type text
          let input = document.createElement("input");
          input.type = "text";

          // Append the input element to the cell
          td.appendChild(input);

          // Push an empty string to the rowData array
          rowData.push("");
        }

        // Append the cell to the row
        tr.appendChild(td);
      }

      // Append the row to the table body
      table.appendChild(tr);

      // Push the rowData array to the tableData array
      tableData.push(rowData);
    });

    // Add a click event listener to the save button
    save.addEventListener("click", function() {
      // Loop through all the rows in the table body
      for (let i = 1; i < table.rows.length; i++) {
        // Loop through all the cells in each row
        for (let j = 1; j < table.rows[i].cells.length; j++) {
          // Get the input element in each cell
          let input = table.rows[i].cells[j].querySelector("input");

          // If the input element is not null
          if (input) {
            // Get the value of the input element
            let value = input.value;

            // Validate that the value is not empty
            if (value == "") {
              alert("Please fill all fields");
              return;
            }

            // If it is the marks column (index 4)
            if (j == 4) {
              // Validate that the value is a number
              if (isNaN(value)) {
                alert("Please enter a valid number for marks");
                return;
              }
            }

            // If it is the markedBy column (index 5)
            if (j == 5) {
              // Validate that the value is an email address using a regular expression
              let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
              if (!regex.test(value)) {
                alert("Please enter a valid email address for markedBy");
                return;
              }
            }

            // Update the tableData array with the value at the corresponding index
            tableData[i - 1][j] = value;
          }
        }
      }

      // Log the new row and the entire tableData array to the console
      console.log(tableData[tableData.length - 1]);
      console.log(tableData);
    });