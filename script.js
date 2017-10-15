
let far_cel = document.querySelector("#far_cel");
let cf = document.querySelector('#C_F');
let submitButton = document.querySelector("#submit");
let reset =document.querySelector("#reset");

function SubmitFunction() {
    let answer = "";

    switch (cf.value) {
        case 'F':
        case 'f':
            answer = (parseFloat(far_cel.value) * (9 / 5) + 32);
            break;

        case 'C':
        case 'c':
            answer = (parseFloat(far_cel.value) - 32) * (5 / 9);
            break;

        default:
            answer = ''
            break
    }
    return answer
}



submitButton.addEventListener("click", function () {
    var result = SubmitFunction();
    let cf = document.querySelector('#C_F');
    let resultData=document.querySelector("#Result");
    if (cf.value == 'c' || cf.value == 'C') {
        resultData.innerHTML="The Temperature in Celsius is " + result;
    }
    else if (cf.value == 'F' || cf.value == 'f') {
        resultData.innerHTML="The Temperature in Fahrenheit is " + result;
    }
    else {
        resultData.innerHTML="Please choose a valid operator" + result;
    }

});


reset.addEventListener("click", function () {
    far_cel.value="";
    cf.value="";
});