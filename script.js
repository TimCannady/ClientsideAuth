function formResults(){
    var formAge = parseInt(input.ageInputBox.value,10);
    if (isNaN(formAge)){
        alert("please input a number")
    }
    else{
        alert("Your age is: " + formAge);
    }
}
