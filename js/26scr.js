var array = [];
var col1 = true;
var col2 = true;
var col3 = true;
var col4 = true;
var col5 = true;
var col6 = true;
let pers = {
    Id: 1,
    Name: "Sam",
    Salary: 95000,
    Age: 45,
    Gender: "Male",
    Dept: "Operations"
}
let pers2 = {
    Id: 2,
    Name: "Bob",
    Salary: 80000,
    Age: 21,
    Gender: "Male",
    Dept: "Support"
}
var last_id = 2;
array.push(pers, pers2);

showTable(array);

function hide(id){
    event.stopPropagation()
    switch (id) {
        case 0:
            if(col1){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col1 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col1 = true;
            }
            break;
        case 1:
            if(col2){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col2 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col2 = true;
            }
            break;
        case 2:
            if(col3){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col3 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col3 = true;
            }
            break;
        case 3:
            if(col4){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col4 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col4 = true;
            }
            break;
        case 4:
            if(col5){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col5 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col5 = true;
            }
            break;
        case 5:
            if(col6){
                document.getElementById(`sp_${id}`).style.display = "none";
                document.getElementById(`th${id}`).style.width = "0";
                col6 = false;
            }
            else{
                document.getElementById(`sp_${id}`).style.display = "inline";
                document.getElementById(`th${id}`).style.width = "auto";
                col6 = true;
            }
            break;
        default:
            break;
    }
    showTable(array);
}

function AddNew() {
    let form = document.forms["addNew"];
    let person = {
        Id: last_id+1,
        Name: document.forms["addNew"]["name"].value,
        Salary: document.forms["addNew"]["salary"].value,
        Age: document.forms["addNew"]["age"].value,
        Gender: null,
        Dept: document.forms["addNew"]["dept"].value
    }
    var rad=document.getElementsByName('males');
    if(rad[0].checked){
        person.Gender = "Male";
    }
    else{
        person.Gender = "Female";
    }
    array.push(person);
    console.log(person);
    last_id++;
    showTable(array);
    event.preventDefault();
}

function showTable(arr){
    document.getElementById("tbody1").innerHTML = ""; 
    for (let i = 0; i < arr.length; i++) {
 
        
        let code = "<tr>";
        if(col1){
            code += `<td>${arr[i].Id}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        if(col2){
            code += `<td>${arr[i].Name}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        if(col3){
            code += `<td>${arr[i].Salary}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        if(col4){
            code += `<td>${arr[i].Age}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        if(col5){
            code += `<td>${arr[i].Gender}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        if(col6){
            code += `<td>${arr[i].Dept}</td>`;
        }
        else{
            code += `<td></td>`;
        }
        code += "</tr>"
        document.getElementById("tbody1").innerHTML += code;    
        
    }
}
function sort(id){
    event.target.focus();
    switch (id) {
        case 0:
            array.sort(sortId);
            showTable(array);
            break;
        case 1:
            array.sort(sortName);
            showTable(array);
            break;
        case 2:
            array.sort(sortSalary);
            showTable(array);
            break;
        case 3:
            array.sort(sortAge);
            showTable(array);
            break;
        case 4:
            array.sort(sortGender);
            showTable(array);
            break;
        case 5:
            array.sort(sortDept);
            showTable(array);
            break;
        default:
            break;
    }
}
function sortId(a,b){
    if(a.Id>b.Id)return 1;
    if(a.Id<b.Id)return -1;
    return 0;
}
function sortName(a,b){
    if(a.Name>b.Name)return 1;
    if(a.Name<b.Name)return -1;
    return 0;
}
function sortSalary(a,b){
    let x = Number(a.Salary);
    let y = Number(b.Salary);
    if(x>y)return 1;
    if(x<y)return -1;
    return 0;
}
function sortAge(a,b){
    let x = Number(a.Age);
    let y = Number(b.Age);
    if(x>y)return 1;
    if(x<y)return -1;
    return 0;
}
function sortSalary(a,b){
    if(a.Gender>b.Gender)return 1;
    if(a.Gender<b.Gender)return -1;
    return 0;
}
function sortDept(a,b){
    if(a.Dept>b.Dept)return 1;
    if(a.Dept<b.Dept)return -1;
    return 0;
}