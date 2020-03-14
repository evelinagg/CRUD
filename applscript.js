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
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    formData["Radio"] = document.getElementById("Radio").value;
    formData["Radioo"] = document.getElementById("Radioo").value;
    formData["englevel"] = document.getElementById("englevel").value;
    formData["Available"] = document.getElementById("Available").value;
    formData["Tsc"] = document.getElementById("Tsc").value;
    formData["Spp"] = document.getElementById("Spp").value;
    formData["Study"] = document.getElementById("Study").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("applicationList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.PhoneNumber;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Radio;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Radioo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.englevel;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Available;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.Tsc;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.Spp;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.Study;
    cell11 = newRow.insertCell(11);
    cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Radio").value = "";
    document.getElementById("Radioo").value = "";
    document.getElementById("englevel").value = "";
    document.getElementById("Available").value = "";
    document.getElementById("Tsc").value = "";
    document.getElementById("Spp").value = "";
    document.getElementById("Study").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("PhoneNumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Radio").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Radioo").value = selectedRow.cells[5].innerHTML;
    document.getElementById("englevel").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Available").value = selectedRow.cells[7].innerHTML;
    document.getElementById("Tsc").value = selectedRow.cells[8].innerHTML;
    document.getElementById("Spp").value = selectedRow.cells[9].innerHTML;
    document.getElementById("Study").value = selectedRow.cells[10].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.PhoneNumber;
    selectedRow.cells[4].innerHTML = formData.Radio;
    selectedRow.cells[5].innerHTML = formData.Radioo;
    selectedRow.cells[6].innerHTML = formData.englevel;
    selectedRow.cells[7].innerHTML = formData.Available;
    selectedRow.cells[8].innerHTML = formData.Tsc;
    selectedRow.cells[9].innerHTML = formData.Spp;
    selectedRow.cells[10].innerHTML = formData.Study;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("applicationList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}