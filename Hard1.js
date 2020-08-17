function realType(value){
    if(Array.isArray(value)){
       return document.write('array'+"</br>");
       console.log('array');
    }
    else if(value==null){
        return document.write('null'+"</br>");
        console.log('null')
    }
    else{
        return document.write(typeof value+"</br>"); 
        console.log(typeof value);
    }
}
realType(1);
realType("a");
realType(true);
realType([]);
realType(null);