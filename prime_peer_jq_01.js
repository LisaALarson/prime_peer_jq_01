//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var femaleName = ["Lisa", "Skyler", "Cat"];
var maleName = ["Eric", "Matthew", "Scott"];


function person(age, sex, weight, name, lastName){
	var age = randomNumber(1, 100);
	var weight = randomNumber(1, 300);
	var sex = randomNumber(0, 1);
	var name = 0;
	var lastName = ["Larson", "Brommander", "Crist", "Johnson"];
	lastName = lastName[randomNumber(0, lastName.length-1)];
		
	var firstNameVar = 0;

		if(sex == 1){
			sex = "male";
			firstNameVar = randomNumber(0, maleName.length-1);
			name = maleName[firstNameVar];

		}
		else {
			sex = "female";
			firstNameVar = randomNumber(0, femaleName.length-1);
			name = femaleName[firstNameVar];
		}
		console.log("Here are the names: " + maleName + " " + femaleName);
	this.age = age;
	this.sex = sex;
	this.weight = weight;
	this.name = name;
	this.lastName = lastName;
		
	console.log(age);
	console.log(weight);
	console.log(sex);
	console.log(name);
	console.log(lastName);
}

$(document).ready(function(){
	$("#buttonPerson").on("click", function(){
		var newPerson = new person();

		$("#name").children().remove();
		$("#lastName").children().remove();
		$("#sexInfo").children().remove();
		$("#ageInfo").children().remove();
		$("#weightInfo").children().remove();
		

		$("#name").append("<p>" + newPerson.name + "</p>");
		$("#lastName").append("<p>" + newPerson.lastName + "</p>");
		$("#sexInfo").append("<p>This person is "+ newPerson.sex +".</p>");
		$("#ageInfo").append("<p>This person is "+ newPerson.age +" years old.</p>");
		$("#weightInfo").append("<p>This person weighs "+ newPerson.weight +" pounds.</p>");
	});
});

