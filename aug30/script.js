var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
          var formData = {};
          formData["Name"] = document.getElementById("fullName").value;
          formData["salary"] = document.getElementById("salary").value;
          formData["Age"] = document.getElementById("age").value;
          return formData;
      }
      function insertNewRecord(data) {
          var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
          var newRow = table.insertRow(table.length);
          cell1 = newRow.insertCell(0);
          cell1.innerHTML = data.Name;
          cell2 = newRow.insertCell(1);
          cell2.innerHTML = data.salary;
          cell3 = newRow.insertCell(2);
          cell3.innerHTML = data.Age;
          cell3 = newRow.insertCell(3);
           cell3.innerHTML = `<button onClick="onEdit(this)" class="btn btn-warning">Edit</button>
                             <button onClick="onDelete(this)" class="btn btn-danger">Delete</button>`;

      }
      function resetForm() {
          document.getElementById("fullName").value = "";
          document.getElementById("salary").value = "";
          document.getElementById("age").value = "";
          selectedRow = null;
      }
      function onEdit(td) {
          selectedRow = td.parentElement.parentElement;
          document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
          document.getElementById("salary").value = selectedRow.cells[1].innerHTML;
          document.getElementById("age").value = selectedRow.cells[2].innerHTML;
      }
      function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.salary;
    selectedRow.cells[2].innerHTML = formData.Age;
}
function onDelete(td) {
          if (confirm('Are you sure to delete this record ?')) {
              row = td.parentElement.parentElement;
              document.getElementById("employeeList").deleteRow(row.rowIndex);
              resetForm();
          }
      }
      function validate() {
          isValid = true;
          if (document.getElementById("fullName").value == "") {
              isValid = false;
              document.getElementById("fullNameValidationError").classList.remove("hide");
          } else {
              isValid = true;
              if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
                  document.getElementById("fullNameValidationError").classList.add("hide");
          }
          return isValid;
}
      

