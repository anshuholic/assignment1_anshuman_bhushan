
function specialReverse(sentence,letter)
{
	//using .split function

	var a=sentence.split(" ");
	for(var j=0;j<a.length;j++)
		{
			var z=a[j].split("");
			if(z[0]===letter)
			{
				reverse(a[j]);
			}
			else
			{
				document.write(a[j]+" ");
				console.log(a[j]+" ");
			}
		}
	function reverse(golag)
	{
		var splitting=golag.split("");
		var k=splitting.length-1;
		for(var j=k;j>=0;j--)
		{
			document.write(splitting[j]);
			console.log(splitting[j]);
		}
		document.write(" ");
		console.log(" ");
	}	

}
specialReverse ("word searches are super fun","s");
//specialReverse ("first man to walk on the moon","m");
//specialReverse("peter piper picked pickled peppers","p");
