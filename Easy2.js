function addUp(num){
    if(num>=1 && num<=1000)
    {
        var sum=0;
        for(var i=1;i<=num;i++){
            sum=sum+i;
        }
        return sum;
    }
    else{
        return "Number is out of range";
    }
}

document.write(addUp(4)+"</br>");
console.log(addUp(4));
document.write(addUp(13)+"</br>");
console.log(addUp(13))
document.write(addUp(600)+"</br>");
console.log(addUp(600));
document.write(addUp(10000)+"</br>");
console.log(addUp(10000));