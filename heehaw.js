let num = 1;
while(num <= 100){
    if(num%5 == 0 && num%3 == 0){
        document.write("Hee Haw! <br>");
    }
    else if(num%3 == 0){
        document.write("Hee! <br>");
    }
    else if(num%5 == 0){
        document.write("Haw! <br>");
    }
    else{
        document.write(num + "<br>");
    }
    num++;
}