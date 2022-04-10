let form=document.forms.test;
let button=form.button
let body=document.body

button.onclick=function (){
    let textToAdd=document.createElement('div')
    textToAdd.innerText=form.pole_tekstowe.value+" "+form.pole_liczbowe.value
    let typeToAdd=document.createElement('div')
    typeToAdd.innerText=typeof(form.pole_tekstowe.value)+" "+typeof(form.pole_liczbowe.value)
    body.appendChild(textToAdd);
    body.appendChild(typeToAdd);
}