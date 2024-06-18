var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById('m');
var female = document.getElementById('f');
var resultArea = document.querySelector(".comment");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){
    if(age.value=='' || height.value=='' || weight.value=='' || (!male.checked && !female.checked)){
        modal.style.display = "block";
        modalText.innerHTML = "Please fill in all the fields";
    }else{
        countBMI();
    }
}

function countBMI(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if (female.checked){
        p.push("female");
    }
    var BMI = Number(p[2]) / (Number(p[1]) / 100) ** 2;
    var result = '';
    if(BMI < 18.5){
        result = 'Underweight';
    }else if(BMI >= 18.5 && BMI <= 24.9){
        result = 'Healthy';
    }else if(BMI >= 25 && BMI <= 29.9){
        result = 'Overweight';
    }else if(BMI >= 30 && BMI <= 34.9){
        result = 'Obese';
    }else if(BMI >= 35){
        result = 'Extremely Obese';
    }
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = 'You are <span id="comment"> ${result} </span>';
    document.querySelector("#result").innerHTML = BMI.toFixed(2);
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}