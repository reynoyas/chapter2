document.getElementById("err-num").style.display = "none";
document.getElementById("err-num2").style.display = "none";

function heehaw(){
    let userNum = document.getElementById("userNum").value;
    let num = 1;
    let isValid = true;


    if (userNum < 0) {
        document.getElementById("err-num").style.display = "block";
        isValid = false;
    } else if(isNaN(userNum)){
        document.getElementById("err-num2").style.display = "block";
        isValid = false;
    } else {
        while (num <= userNum) {
            if (num % 5 == 0 && num % 3 == 0) {
                document.write("Hee Haw! <br>");
            } else if (num % 3 == 0) {
                document.write("Hee! <br>");
            } else if (num % 5 == 0) {
                document.write("Haw! <br>");
            } else {
                document.write(num + "<br>");
            }
            num++;
        }
    }

    return isValid;
}
