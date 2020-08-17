function Divides_Evenly(a,b){
    
    if(a>b || a==b){
        if(a%b===0){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "a is not greater than b";
    }
}

document.write(Divides_Evenly(98,7)+"<br>");
console.log(Divides_Evenly(98,7));
document.write(Divides_Evenly(85,14)+"<br>");
console.log(Divides_Evenly(85,14));