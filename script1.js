function checkAge(){
    let ageInput = document.getElementById("age");
    let age = parseInt(ageInput.value);

    if (age >=25){
        alert("You are 25 years old and above!");
    }else{
        alert("You are 25 years old below!")
    }
}

function checkNum(){
    let numInput = document.getElementById("num");
    let num = parseInt(numInput.value);

    if (num < 100){
        alert("The number is less than 100");
    }else{
        alert("The number is greater than or equal to 100")
    }
}