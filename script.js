function firstWord(s) {
  // your code here
	const arr=s.trim().split(" ");
	return arr.length>0?arr[0]:""
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
