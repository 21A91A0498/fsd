var list = [{
			'Course_Name' : 'Fullstack',
			'Course_no.'  : '08',
			'course_Fees' : '24000',
			' Place'      : 'Technical_Hub'
		},{
			'Course_Name' : 'AWS',
			'Course_no.'  : '05',
			'course_Fees' : '24000',
			' Place'      : 'Technical_Hub'
		},{
			'Course_Name' : 'Flutter',
			'Course_no.'  : '06',
			'course_Fees' : '24000',
			' Place'      : 'Technical_Hub'
		}]

var course = document.getElementsByTagName('td');
let c = 0 ;
for(let i = 0; i<list.length ; i++){
	for(key in list[i])
	{
		course[c].innerHTML = list[i][key];
		c++
		// document.write(list[i][key])
		// document.write('<br>')
	}
}