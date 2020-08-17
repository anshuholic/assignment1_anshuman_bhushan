function charCount(str, letter){
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
   {
    if (str.charAt(position) == letter) 
    {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

document.write(charCount('edabit', 'a')+"</br>");
console.log(charCount('edabit', 'a'));
document.write(charCount('Chamber of secrets', 'c')+"</br>");
console.log(charCount('Chamber of secrets', 'c'));
document.write(charCount('big fat bubble', 'b')+"</br>");
console.log(charCount('big fat bubble', 'b'));
