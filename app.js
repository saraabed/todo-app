let Name=prompt("your name");
let gender="";
gender = prompt(` please write "male" or "female"`);
if(gender !=="male" && gender!=="female") {
    gender = prompt(` please write "male" or "female"`);
}


age=prompt("your age please")
if (age <= 0) 
alert("Age is less than 0");
    
y = confirm("continue?")
if (y == true) {
    if (gender == "Male")
        alert("hi Mr" + Name);
    else
        alert("hi Ms" + Name);
}