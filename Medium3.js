function removeDups(chars)
{
let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
})
document.write(uniqueChars+"</br>");
console.log(uniqueChars);
}
removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John", "Taylor", "John"]);
