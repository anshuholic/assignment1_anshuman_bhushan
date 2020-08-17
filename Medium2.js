function testJackpot(array)
{
	var flag=0;
	for(var i=array.length-1;i>=0;i--)
	{
		if(array[i]==array[0])
		{
			
			flag++;
		}
	}
	

	if(flag===array.length)
	{
		document.write("true"+"</br>");
		console.log("true");
	}
	else
	{
		document.write("false"+"</br>");
		console.log("false");
	}
}
testJackpot( ["@", "@", "@", "@"]);
testJackpot( ["abc", "abc", "abc", "abc"]);
testJackpot( ["SS", "SS", "SS", "SS"]);
testJackpot( ["&&", "&", "&&&", "&&&&"]);
testJackpot( ["SS", "SS", "SS", "Ss"]);