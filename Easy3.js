function replacevowel(word)
{
	var vowel={ a:'1',e:'2',i:'3',o:'4',u:'5'};
	var ar=Array.from(word);
	for(var i=0;i<word.length;i++)
	{
		if(ar[i]==='a')
			{
				ar[i]=vowel.a;
			
			}
			if(ar[i]==='e')
			{
				ar[i]=vowel.e;
			
			}
			if(ar[i]==='i')
			{
				ar[i]=vowel.i;
			
			}
			if(ar[i]==='o')
			{
				ar[i]=vowel.o;
			
			}
			if(ar[i]==='u')
			{
				ar[i]=vowel.u;
			
			}
	}
	for(var i=0;i<word.length;i++)
	{
		document.write(ar[i]);
		console.log(ar[i]);
	}

}
replacevowel("chembur");