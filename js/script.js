var students = [
    {"name": "Emil", "email": "Emil@Rasmussen-Solutions.dk", "phone": "60727108", "groupName": "The cool kids", "category": "Yellow"},
    {"name": "Mathias", "email": "Mathias@Mathias.dk", "phone": "12345678", "groupName": "The cool kids", "category": "Yellow"}
];

var tableBody = document.getElementById("studentTable");

var lastId = [];
var saveButton = false;

var deleteRow = function (id) {
    var del = id.substring(0,1);    
    students.splice(del, 1);
    populateTable();
};

var deleteEverything = function () {
    tableBody.innerHTML = "";
    students.length = 0;
};

var saveRow = function (i) {   
    students[i] =
            {"name": document.getElementById("eName").value,
                "email": document.getElementById("eEmail").value,
                "phone": document.getElementById("ePhone").value,
                "groupName": document.getElementById("eGroup").value,
                "category": document.getElementById("eCat").value};
    populateTable();
};

var editRow = function (i) { 
    i = i.substring(0,1);
    
    saveButton = true;
    
    var name = document.createElement("INPUT");
    name.setAttribute("type", "text");
    name.setAttribute("id", "eName");
    name.value = students[i].name;
    name.className = "form-control";
    var email = document.createElement("INPUT");
    email.setAttribute("type", "text");
    email.setAttribute("id", "eEmail");
    email.value = students[i].email;
    email.className = "form-control";
    var phone = document.createElement("INPUT");
    phone.setAttribute("type", "text");
    phone.setAttribute("id", "ePhone");
    phone.value = students[i].phone;
    phone.className = "form-control";
    var group = document.createElement("INPUT");
    group.setAttribute("type", "text");
    group.setAttribute("id", "eGroup");
    group.value = students[i].groupName;
    group.className = "form-control";
    var category = document.createElement("SELECT");
    category.setAttribute("id", "eCat");
    category.className = "";
    var option = document.createElement("option");
    option.text = "Green";
    var option2 = document.createElement("option");
    option2.text = "Red";
    category.add(option);
    category.add(option1);
    category.value = students[i].category;

    var t = document.createTextNode("Save");
    btnSave.appendChild(t);

    tableBody.deleteRow(i);
    var row = tableBody.insertRow(i);

    row.insertCell(0).appendChild(name);
    row.insertCell(1).appendChild(email);
    row.insertCell(2).appendChild(phone);
    row.insertCell(3).appendChild(group);
    row.insertCell(4).appendChild(category);
    row.insertCell(5).appendChild(btnSave);
};


var populateTable = function () {
    tableBody.innerHTML = "";
    for (var i = 0; i < students.length; i++) {
        var row = tableBody.insertRow(i);

        var btn = document.createElement("button");
        btn.className = "btn btn-danger";
        btn.id = i + "btn";        
        btn.onclick = function () {
            deleteRow(this.id);
        };
        var t = document.createTextNode("Delete");
        btn.appendChild(t);

        var btnEdit = document.createElement("button1");
        btnEdit.className = "btn btn-info";
        btnEdit.id = i+"btn1";
        btnEdit.onclick = function () {
            editRow(this.id);
        };
        var tEdit = document.createTextNode("Edit");
        btnEdit.appendChild(tEdit);

        
        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].email;
        row.insertCell(2).innerHTML = students[i].phone;
        row.insertCell(3).innerHTML = students[i].groupName;
        row.insertCell(4).innerHTML = students[i].category;
        row.insertCell(5).appendChild(btn);
        row.insertCell(6).appendChild(btnEdit);   
        
        row.id = i;
        
      
        row.onmouseover=function(){showButton(this.id);};
        
        row.onmouseout =function(){hideButton(this.id);};
        
        {document.getElementById(i+"btn").style.display="display";};
    };
};



var showButton = function(id){    
     {document.getElementById(id+"btn").style.display="block";};
     {document.getElementById(id+"btn1").style.display="block";};
     {document.getElementById(id+"btn2").style.display="block";};
     
    
 
    
 
};


populateTable();

var studentForm = document.getElementById("studentForm");

studentForm.onsubmit = function (event) {
    event.preventDefault();
    var student = {};
    student.name = studentForm.elements["name"].value;
    student.email = studentForm.elements["email"].value;
    student.phone = studentForm.elements["phone"].value;
    student.groupName = studentForm.elements["groupName"].value;
    student.category = studentForm.elements["category"].value;
    students.push(student);
    populateTable();
};  