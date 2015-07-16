//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function person(age, sex, weight){
	var age = randomNumber(1, 100);
	var weight = randomNumber(1, 1000);
	var sex = randomNumber(0, 1);
		if(sex == 1){
			sex = "male";
		}
		else {
			sex = "female";

		}
	this.age = age;
	this.sex = sex;
	this.weight = weight;
		
console.log(age);
console.log(weight);
console.log(sex);
}

$(document).ready(function(){
	$("#buttonPerson").on("click", function(){
		var newPerson = new person();
		
		$("#sexInfo").children().remove();
		$("#ageInfo").children().remove();
		$("#weightInfo").children().remove();

		$("#sexInfo").append("<p>This person is "+ newPerson.sex +".</p>");
		$("#ageInfo").append("<p>This person is "+ newPerson.age +" years old.</p>");
		$("#weightInfo").append("<p>This person weighs "+ newPerson.weight +" pounds.</p>");
	});
});

