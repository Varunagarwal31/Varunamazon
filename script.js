var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    //insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["subject"] = document.getElementById("subject").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length);
    cel1 = newRow.insertCell(0);
    cel1.innerHTML = data.name;
    cel2 = newRow.insertCell(1);
    cel2.innerHTML = data.email
    cel3 = newRow.insertCell(2);
    cel3.innerHTML = data.subject
    cel4 = newRow.insertCell(3);
    //cel3.innerHTML = '<a href="#" onClick="onEdit(this)">Edit</a>';
    cel4.innerHTML = '<button href="#" onClick="onEdit(this)">Edit</button>';
}

function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.subject;
}