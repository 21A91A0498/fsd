// let ul=document.getElementsByTagName('li');
// ul[0].innerText = 'Aditya Engineering College';
// ul[1].style.textTransform = 'lowercase';
var tds=document.getElementsByTagName('td')
// ----------to print serial in table------ //


for (let i=0; i<tds.length ; i++ ){
	tds[i].innerText=i+1;
}


// ----------for reverse- method1------ //

// var len=tds.length
// for (let i=0; i<tds.length ; i++ ){
// 	tds[i].innerText= len;
// 	len--
// }


// ----------for reverse- method2------ //

// for (let i=tds.length-1; i>=0 ; i--){
// 	tds[i].innerText=tds.length-i;
// 	console.log(i)
// }