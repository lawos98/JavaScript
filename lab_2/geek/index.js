import {drawPieChart} from "./modules/pie.js";
import {drawLineChart} from "./modules/bar.js";

let selectedRow = null;
let currentCountryList=["Poland","Angola","France","Spain"];
let currentCasesMap=new Map([["Poland",111],["Angola",222],["France",333],["Spain",444]]);
let currentDeathsMap=new Map([["Poland",111],["Angola",222],["France",333],["Spain",444]]);
let currentTestsMap=new Map([["Poland",111],["Angola",222],["France",333],["Spain",444]]);
let currentVaccineMap=new Map([["Poland",111],["Angola",222],["France",333],["Spain",444]]);
let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

drawPieChart(currentCasesMap, "Cases", 1000, 800)
drawLineChart(currentDeathsMap, "Deaths", 1000, 800)

document.getElementById("submitButton").addEventListener("click", () => onFormSubmit())

for(let i=0;i<currentCountryList.length;i++){
    let table = document.getElementById("covidList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = currentCountryList[i];
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = currentCasesMap.get(currentCountryList[i]);
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = currentDeathsMap.get(currentCountryList[i]);
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = currentTestsMap.get(currentCountryList[i]);
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = currentVaccineMap.get(currentCountryList[i]);
    let cell6 = newRow.insertCell(5);
    const buttonEdit = document.createElement('button')
    buttonEdit.innerText="Edit"
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText="Delete"
    buttonEdit.addEventListener("click", () => onEdit(newRow))
    buttonDelete.addEventListener("click", () => onDelete(newRow))
    cell6.appendChild(buttonEdit)
    cell6.appendChild(buttonDelete)
}
function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (!currentCountryList.includes(formData.country))
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
        drawPieChart(currentCasesMap, "Cases", 1000, 800)
        drawLineChart(currentDeathsMap, "Deaths", 1000, 800)
    }
}

function readFormData() {
    let formData = {};
    formData["country"] = document.getElementById("country").value;
    formData["cases"] = document.getElementById("cases").value;
    formData["deaths"] = document.getElementById("deaths").value;
    formData["tests"] = document.getElementById("tests").value;
    formData["vaccine"] = document.getElementById("vaccine").value;
    return formData;
}

function insertNewRecord(data) {
    addCountry(data.country,data.cases,data.deaths,data.tests,data.vaccine)
    let table = document.getElementById("covidList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.country;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cases;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.deaths;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tests;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.vaccine;
    let cell6 = newRow.insertCell(5);
    const buttonEdit = document.createElement('button')
    buttonEdit.innerText="Edit"
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText="Delete"
    buttonEdit.addEventListener("click", () => onEdit(newRow))
    buttonDelete.addEventListener("click", () => onDelete(newRow))
    cell6.appendChild(buttonEdit)
    cell6.appendChild(buttonDelete)
}

function resetForm() {
    document.getElementById("country").value = "";
    document.getElementById("cases").value = "";
    document.getElementById("deaths").value = "";
    document.getElementById("tests").value = "";
    document.getElementById("vaccine").value = "";
    selectedRow = null;
}

function onEdit(row) {
    document.getElementById("country").value = row.cells[0].innerHTML;
    document.getElementById("cases").value = row.cells[1].innerHTML;
    document.getElementById("deaths").value = row.cells[2].innerHTML;
    document.getElementById("tests").value = row.cells[3].innerHTML;
    document.getElementById("vaccine").value = row.cells[4].innerHTML;
}

function updateRecord(formData) {
    deleteCountry(formData.country)
    addCountry(formData.country,formData.cases,formData.deaths,formData.tests,formData.vaccine)
    let selectedRow5=document.getElementById("covidList").childNodes
    Array.from(selectedRow5).forEach(child => {
        if(child.cells[0].innerHTML===formData.country){
            selectedRow.cells[1].innerHTML = formData.cases;
            selectedRow.cells[2].innerHTML = formData.deaths;
            selectedRow.cells[3].innerHTML = formData.tests;
            selectedRow.cells[4].innerHTML = formData.vaccine;
        }
    });
}

function onDelete(row) {
    deleteCountry(row.cells[0].innerHTML)
    document.getElementById("covidList").deleteRow(row.rowIndex);
    resetForm();
}
function deleteCountry(name){
    let index=currentCountryList.indexOf(name)
    currentCountryList.splice(index,1)
    currentCasesMap.delete(name)
    currentDeathsMap.delete(name)
    currentTestsMap.delete(name)
    currentVaccineMap.delete(name)
    drawPieChart(currentCasesMap, "Cases", 1000, 800)
    drawLineChart(currentDeathsMap, "Deaths", 1000, 800)
}
function addCountry(name,cases,deaths,tests,vaccine){
    currentCountryList.push(name)
    currentCasesMap.set(name,cases)
    currentDeathsMap.set(name,deaths)
    currentTestsMap.set(name,tests)
    currentVaccineMap.set(name,vaccine)
}

function validate() {
    let isValid = true;
    if(!country_list.includes(document.getElementById("country").value)){
        isValid=false
        document.getElementById("countryValidationError").classList.remove("hide");
    }
    else if(!document.getElementById("countryValidationError").classList.contains("hide")){
        document.getElementById("countryValidationError").classList.add("hide");
    }
    if(isNaN(document.getElementById("cases").value)){
        isValid=false
        document.getElementById("casesValidationError").classList.remove("hide");
    }
    else if(!document.getElementById("casesValidationError").classList.contains("hide")){
        document.getElementById("casesValidationError").classList.add("hide");
    }
    if(document.getElementById("cases").value===""){
        isValid=false
        document.getElementById("casesValidationError2").classList.remove("hide");
    }
    else if(!document.getElementById("casesValidationError2").classList.contains("hide")){
        document.getElementById("casesValidationError2").classList.add("hide");
    }
    if(isNaN(document.getElementById("deaths").value)){
        isValid=false
        document.getElementById("deathsValidationError").classList.remove("hide");
    }
    else if(!document.getElementById("deathsValidationError").classList.contains("hide")){
        document.getElementById("deathsValidationError").classList.add("hide");
    }
    if(document.getElementById("deaths").value===""){
        isValid=false
        document.getElementById("deathsValidationError2").classList.remove("hide");
    }
    else if(!document.getElementById("deathsValidationError2").classList.contains("hide")){
        document.getElementById("deathsValidationError2").classList.add("hide");
    }
    if(isNaN(document.getElementById("tests").value)){
        isValid=false
        document.getElementById("testsValidationError").classList.remove("hide");
    }
    else if(!document.getElementById("testsValidationError").classList.contains("hide")){
        document.getElementById("testsValidationError").classList.add("hide");
    }
    if(document.getElementById("tests").value===""){
        isValid=false
        document.getElementById("testsValidationError2").classList.remove("hide");
    }
    else if(!document.getElementById("testsValidationError2").classList.contains("hide")){
        document.getElementById("testsValidationError2").classList.add("hide");
    }
    if(isNaN(document.getElementById("vaccine").value)){
        isValid=false
        document.getElementById("vaccineValidationError").classList.remove("hide");
    }
    else if(!document.getElementById("vaccineValidationError").classList.contains("hide")){
        document.getElementById("vaccineValidationError").classList.add("hide");
    }
    if(document.getElementById("vaccine").value===""){
        isValid=false
        document.getElementById("vaccineValidationError2").classList.remove("hide");
    }
    else if(!document.getElementById("vaccineValidationError2").classList.contains("hide")){
        document.getElementById("vaccineValidationError2").classList.add("hide");
    }
    return isValid;
}