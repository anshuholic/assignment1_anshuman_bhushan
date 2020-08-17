
	const numInStr = (params) => 
	{
		var array = [];
		var k = 0;
		for(var i = 0; i < params.length; i++)
		{
			var count = 0;
			var temp = params[i];
			var temp1 = temp.split('');
			for(var j=0; j < temp1.length; j++)
			{
				if( !isNaN(temp1[j]) && temp1[j] != " " )
				{
					count++;
				}
			}
			if(count > 0)
			{
				array[k] = temp1.join('');
				k++;
			}
		}
	   return(" [" + array + "] ");
	}
	document.write(numInStr(["1a", "a", "2b", "b"])+"</br>");
	console.log(numInStr(["1a", "a", "2b", "b"]));
	document.write(numInStr(["abc", "abc10"])+"</br>");
	console.log(numInStr(["abc", "abc10"]));
	document.write(numInStr(["abc", "ab10c", "a10bc", "bcd"])+"</br>");
	console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
	document.write(numInStr(["this is a test", "test1"])+"</br>");
	console.log(numInStr(["this is a test", "test1"]));

	//document.write(numInStr(["1a", "a", "2b", "b"])+"</br>");
	